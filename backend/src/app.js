import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { authRouter } from './routes/auth.route';

export const app = express();

app.use(bodyParser.urlencoded())

app.use(bodyParser.json())

morgan(':method :url :status :res[content-length] - :response-time ms')


app.use(cors({
    origin: "*",
    allowedHeaders: "*",
    methods: ['GET', 'PUT', 'POST','PATCH']
}))

app.use('/api/auth',authRouter)
app.use('/api/users/',userRoutes)
app.use('/api/products',productRoutes)
app.use('/api/orders',orderRoutes)

app.use(globalErrorHandler);