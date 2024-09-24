import React from 'react';
import RegisterTransaction from './component/transactionformcomponent';
import TransactionHistory from './component/transactionhistorycomponent';

const App: React.FC = () => {
   return (
      <div>
         <h1>Account Management</h1>
         <RegisterTransaction />
         <TransactionHistory />
      </div>
   );
};

export default App;