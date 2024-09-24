import React, { useState } from 'react';
import { getUserInfo } from '../services/api';
import TransactionHistoryResult from './transactionhistoryresult';

const TransactionHistory: React.FC = () => {
    const [customerID, setCustomerID] = useState('');
    const [userInfo, setUserInfo] = useState<any>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleGetUserInfo = async () => {
        const info = await getUserInfo(customerID);
        
        if (info.message) {
            setUserInfo(null); // Clear previous user info
            setErrorMessage(info.message); // Set the error message
        } else {
            setErrorMessage(null); // Clear error message
            setUserInfo(info); // Set the user info
        }
    };

    return (
        <div>
            <h2>Transaction History</h2>
            <input
                type="text"
                placeholder="Customer ID"
                value={customerID}
                onChange={(e) => setCustomerID(e.target.value)}
            />
            <button onClick={handleGetUserInfo}>Get History</button>

            {errorMessage && <h3 style={{ color: 'red' }}>{errorMessage}</h3>}
            
            {userInfo && <TransactionHistoryResult data={userInfo} />}
        </div>
    );
};

export default TransactionHistory;
