import React from 'react';

interface TransactionResultProps {
    data: {
        customerID: string;
        name: string;
        surname: string;
        balance: number;
        transactions: number[];
    };
}

const TransactionResult: React.FC<TransactionResultProps> = ({ data }) => {
    return (
        <div>
            <h3>Transaction Result</h3>
            <table>
                <thead>
                    <tr>
                        <th>Field</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Customer ID</td>
                        <td>{data.customerID}</td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>{data.name}</td>
                    </tr>
                    <tr>
                        <td>Surname</td>
                        <td>{data.surname}</td>
                    </tr>
                    <tr>
                        <td>Balance</td>
                        <td>{data.balance}</td>
                    </tr>
                    <tr>
                        <td>Transactions</td>
                        <td>{data.transactions.join(', ')}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TransactionResult;