import { Router } from 'express';
import CategoryRoutes from './category.routes';
const router = Router();

router.use('/category', CategoryRoutes);

export default router;
