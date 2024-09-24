import React, { useState } from 'react';
import { createAccount } from '../services/api';
import TransactionResult from './transactionresult';

const RegisterTransaction: React.FC = () => {
   const [customerID, setCustomerID] = useState('');
   const [name, setName] = useState('');
   const [surname, setSurname] = useState('');
   const [initialCredit, setInitialCredit] = useState(0);
   const [transactionAmount, setTransactionAmount] = useState(0);
   const [response, setResponse] = useState<any>(null);
   const [errorMessage, setErrorMessage] = useState('');

   const handleSubmit = async () => {
      setErrorMessage(''); // Reset error message on new submission

      // Frontend validation
      if (!name || !surname || (customerID === '' && initialCredit === 0)) {
         setErrorMessage('Please try again and fill the information: Name, Surname are required, and either Customer ID or Initial Credit must be provided.');
         return;
      }

      const data = await createAccount(customerID, name, surname, initialCredit, transactionAmount);
      
      if (data.message) {
         // Handle backend validation error messages
         setErrorMessage(data.message);
      } else {
         setResponse(data);
      }
   };

   return (
      <div>
         <h2>Register Transaction</h2>

         <div className="input-container">
            <label htmlFor="customerID">Customer ID (Optional)</label>
            <input 
               id="customerID" 
               type="text" 
               placeholder="Enter Customer ID if already registered" 
               value={customerID} 
               onChange={(e) => setCustomerID(e.target.value)} 
            />
         </div>

         <div className="input-container">
            <label htmlFor="name">Name</label>
            <input 
               id="name" 
               type="text" 
               placeholder="Enter Name" 
               value={name} 
               onChange={(e) => setName(e.target.value)} 
            />
         </div>

         <div className="input-container">
            <label htmlFor="surname">Surname</label>
            <input 
               id="surname" 
               type="text" 
               placeholder="Enter Surname" 
               value={surname} 
               onChange={(e) => setSurname(e.target.value)} 
            />
         </div>

         <div className="input-container">
            <label htmlFor="initialCredit">Initial Credit</label>
            <input 
               id="initialCredit" 
               type="number" 
               placeholder="Enter Initial Credit" 
               value={initialCredit} 
               onChange={(e) => setInitialCredit(Number(e.target.value))} 
            />
         </div>

         <div className="input-container">
            <label htmlFor="transactionAmount">Transaction Amount</label>
            <input 
               id="transactionAmount" 
               type="number" 
               placeholder="Enter Transaction Amount" 
               value={transactionAmount} 
               onChange={(e) => setTransactionAmount(Number(e.target.value))} 
            />
         </div>

         <button onClick={handleSubmit}>Submit</button>

         {errorMessage && <div className="error-message">{errorMessage}</div>}
         {response && <TransactionResult data={response} />}
      </div>
   );
};

export default RegisterTransaction;
