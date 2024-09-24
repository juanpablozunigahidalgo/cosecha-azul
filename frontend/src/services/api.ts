const API_URL = 'http://localhost:5000/api';

export const createAccount = async (customerID: string, name: string, surname: string, initialCredit: number, transactionAmount: number) => {
   const response = await fetch(`${API_URL}/register-transaction`, {
       method: 'POST',
       headers: {
           'Content-Type': 'application/json',
       },
       body: JSON.stringify({ customerID, name, surname, initialCredit, transactionAmount }),
   });
   return response.json();
};

export const getUserInfo = async (customerID: string) => {
   const response = await fetch(`${API_URL}/transaction-history/${customerID}`);
   return response.json();
};