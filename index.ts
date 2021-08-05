import express, {Request, Response} from 'express';
import morgan from 'morgan';
import swaggerUi from "swagger-ui-express";

import router from './src/routes/index.route'

const port = 3030;

const app = express();

app.use(express.json());
app.use(morgan("tiny"));

app.get('/', (req: Request, res: Response) => {
    res.send("Welcome to Git Testing App !!")
});

app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
      swaggerOptions: {
        url: "/swagger.json",
      },
    })
  ); 
  
app.use(router);

app.listen(port, () => {
    console.log(`Server is Running on port ${port}`)
});