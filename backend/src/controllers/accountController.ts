import { Request, Response } from 'express';
import { createAccount, findAccountByCustomerID, addTransactionToAccount } from '../models/account';

export const registerTransaction = (req: Request, res: Response) => {
    const { customerID, name, surname, initialCredit, transactionAmount } = req.body;

    let account = findAccountByCustomerID(customerID);

    if (!account && name && surname && initialCredit) {
        // New account creation
        account = createAccount(customerID, name, surname, initialCredit);
    } else if (account && transactionAmount) {
        // Existing account transaction
        addTransactionToAccount(account, transactionAmount);
    } else {
        return res.status(400).json({ message: 'Invalid input' });
    }

    res.json({
        customerID: account.customerID,
        name: account.name,
        surname: account.surname,
        balance: account.balance,
        transactions: account.transactions
    });
};

export const getTransactionHistory = (req: Request, res: Response) => {
    const { customerID } = req.params;
    const account = findAccountByCustomerID(customerID);

    if (!account) {
        return res.status(404).json({ message: 'Account not found' });
    }

    res.json({
        customerID: account.customerID,
        name: account.name,
        surname: account.surname,
        balance: account.balance,
        transactions: account.transactions
    });
};
