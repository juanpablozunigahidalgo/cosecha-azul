interface Transaction {
    transactionID: number;
    customerID: string;
    amount: number;
    date: Date;
}

export const transactions: Transaction[] = [];
let transactionIdCounter = 1;

// Function to create a new transaction
export const createTransaction = (customerID: string, amount: number): Transaction => {
    const newTransaction: Transaction = {
        transactionID: transactionIdCounter++,
        customerID,
        amount,
        date: new Date()
    };
    transactions.push(newTransaction);
    return newTransaction;
};

// Function to get transactions by customerID
export const getTransactionsByCustomerID = (customerID: string): Transaction[] => {
    return transactions.filter(transaction => transaction.customerID === customerID);
};