import { Router } from 'express';
import { createAccount, getUserInfo } from '../controllers/accountController';

const router = Router();

router.post('/accounts', createAccount);
router.get('/users/:customerID', getUserInfo);

export default router;