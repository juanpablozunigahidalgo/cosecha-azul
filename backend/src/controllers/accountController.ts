import { Request, Response } from 'express';
import { createAccount, findAccountByCustomerID, addTransactionToAccount } from '../models/account';

export const registerTransaction = (req: Request, res: Response) => {
    const { customerID, name, surname, initialCredit, transactionAmount } = req.body;

    // Check for required fields
    if (!name || !surname || (customerID === '' && initialCredit === 0)) {
        return res.status(400).json({ message: 'Please try again and fill the information: Name, Surname are required, and either Customer ID or Initial Credit must be provided.' });
    }

    let account = findAccountByCustomerID(customerID);

    if (!account && name && surname && initialCredit > 0) {
        // New account creation
        account = createAccount(customerID, name, surname, initialCredit);
    } else if (account && transactionAmount > 0) {
        // Existing account transaction
        addTransactionToAccount(account, transactionAmount);
    } else {
        return res.status(400).json({ message: 'Invalid input or transaction amount must be greater than 0.' });
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
