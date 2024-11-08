import express from 'express';
import {json} from 'body-parser';
import cookieSeesion from 'cookie-session';
import 'express-async-errors';
import { routes } from './routes';
import { globalErrorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/not-found-error';
import { connectDB } from './config/db';
import start from './config';


const app = express();

app.set("trust proxy", true);
app.use(json());
app.use(
  cookieSeesion({
    signed: false,
    secure: true
  })
)

app.use("/api/users", routes);

app.all("*", (req, res) => {
    throw new NotFoundError();
});

app.use(globalErrorHandler);

connectDB().then(() => {
  start(app);
})