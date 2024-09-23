import React, { useState } from 'react';
import { createAccount, getUserInfo } from './services/api';

const App: React.FC = () => {
    const [customerID, setCustomerID] = useState('');
    const [initialCredit, setInitialCredit] = useState(0);
    const [userInfo, setUserInfo] = useState<any>(null);

    const handleCreateAccount = async () => {
        await createAccount(customerID, initialCredit);
        alert('Account created!');
    };

    const handleGetUserInfo = async () => {
        const info = await getUserInfo(customerID);
        setUserInfo(info);
    };

    return (
        <div>
            <h1>Account Management</h1>
            <input
                type="text"
                placeholder="Customer ID"
                value={customerID}
                onChange={(e) => setCustomerID(e.target.value)}
            />
            <input
                type="number"
                placeholder="Initial Credit"
                value={initialCredit}
                onChange={(e) => setInitialCredit(Number(e.target.value))}
            />
            <button onClick={handleCreateAccount}>Create Account</button>
            <button onClick={handleGetUserInfo}>Get User Info</button>

            {userInfo && <pre>{JSON.stringify(userInfo, null, 2)}</pre>}
        </div>
    );
};

export default App;