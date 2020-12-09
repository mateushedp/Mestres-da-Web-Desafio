import { Router } from 'express';

import CreateUserService from '../services/UserServices/CreateUser';
import AuthenticateUserService from '../services/UserServices/AuthenticateUser';

const router = Router();

router.post('/signup', CreateUserService.execute);
router.post('/login', AuthenticateUserService.execute);


export default router;
