import express from 'express';

import { createUser , getUserByGoogleId } from '../controllers/users.js';

const router = express.Router();

//POST
router.post('/create', createUser);

//GET
router.get('/:googId', getUserByGoogleId);

//PATCH


export default router;