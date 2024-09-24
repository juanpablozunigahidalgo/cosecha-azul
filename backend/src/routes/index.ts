import { Router } from 'express';
import { registerTransaction, getTransactionHistory } from '../controllers/accountController';

const router = Router();

router.post('/register-transaction', registerTransaction);
router.get('/transaction-history/:customerID', getTransactionHistory);

export default router;