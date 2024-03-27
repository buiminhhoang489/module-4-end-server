import express from 'express'
const router = express.Router();

import { categoryController } from '../../controllers/category.controller.js';
router.get("/", categoryController.findMany)
router.post("/", categoryController.create)
router.delete("/:categoryId", categoryController.delete)
router.patch("/:categoryId", categoryController.update)
export default router;