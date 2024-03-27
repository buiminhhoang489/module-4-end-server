import express from 'express';

const router = express.Router();
import userModel from './modules/user.module.js';

router.use("/user", userModel)

export default router;