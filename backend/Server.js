import express from 'express'
import cors from 'cors'
import {connectDB} from './config/db.js';
import foodRouter from './routes/foodRoute.js';

const app = express();

app.use(express.json());
app.use(cors());

const port = 4000;
connectDB();

//api endpoints
app.use('/api/food',foodRouter)

app.listen(port, () => {
    console.log('i am running as server at port ', port);
    
})

app.get('/', (req, res) => {
    res.send("server running here");
})

