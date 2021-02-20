import 'dotenv/config';
import cors from 'cors';
import express from 'express';

const app = express()

// Using middleware application level to all routes to use CORS HTTP headers
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello There!')
})

app.get('/test', (req, res) => {
    res.send('Hello There, test cases')
})

app.listen(process.env.PORT, () =>
    console.log('Hello Project!')
);
