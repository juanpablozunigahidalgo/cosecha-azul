const API_URL = 'http://localhost:5000/api';

export const createAccount = async (customerID: string, initialCredit: number) => {
    const response = await fetch(`${API_URL}/accounts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ customerID, initialCredit }),
    });
    return response.json();
};

export const getUserInfo = async (customerID: string) => {
    const response = await fetch(`${API_URL}/users/${customerID}`);
    return response.json();
};