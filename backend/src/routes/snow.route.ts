import express, {Request, Response} from 'express';
import { getSnowData } from '../controllers/snow.controller';

const router = express.Router();

router.get('/:id', getSnowData);

export default router;