import express from 'express';

import { createUser , getUserByGoogleId } from '../controllers/users';

const router = express.Router();

//POST
router.post('/', createUser);

//GET
router.get('/:googId', getUserByGoogleId);

//PATCH


export default router;