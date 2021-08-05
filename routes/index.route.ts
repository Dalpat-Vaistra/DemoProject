import express, {Request, Response} from 'express';
import pingRouter from './ping.route';


const router = express.Router();

router.use('/test', pingRouter)



export default router;