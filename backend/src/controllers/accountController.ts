import { Request, Response } from 'express';

interface Account {
    id: number;
    customerID: string;
    balance: number;
    transactions: number[];
}

const accounts: Account[] = [];
let accountIdCounter = 1;

export const createAccount = (req: Request, res: Response) => {
    const { customerID, initialCredit } = req.body;
    const newAccount: Account = {
        id: accountIdCounter++,
        customerID,
        balance: initialCredit,
        transactions: initialCredit ? [initialCredit] : []
    };
    accounts.push(newAccount);
    res.status(201).json(newAccount);
};

export const getUserInfo = (req: Request, res: Response) => {
    const { customerID } = req.params;
    const userAccounts = accounts.filter(account => account.customerID === customerID);
    if (userAccounts.length === 0) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json(userAccounts);
};