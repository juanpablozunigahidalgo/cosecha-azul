interface Account {
    id: number;
    customerID: string;
    name: string;
    surname: string;
    balance: number;
    transactions: number[];
}

export const accounts: Account[] = [];
let accountIdCounter = 1;

export const createAccount = (customerID: string, name: string, surname: string, initialCredit: number): Account => {
    const newAccount: Account = {
        id: accountIdCounter++,
        customerID,
        name,
        surname,
        balance: initialCredit,
        transactions: initialCredit ? [initialCredit] : []
    };
    accounts.push(newAccount);
    return newAccount;
};

export const findAccountByCustomerID = (customerID: string): Account | undefined => {
    return accounts.find(account => account.customerID === customerID);
};

export const addTransactionToAccount = (account: Account, amount: number): void => {
    account.balance += amount;
    account.transactions.push(amount);
};