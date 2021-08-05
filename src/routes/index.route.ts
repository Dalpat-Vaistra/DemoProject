import express, {Request, Response} from 'express';
import pingRouter from './ping.route';


const router = express.Router();

router.use(pingRouter)



export default router;