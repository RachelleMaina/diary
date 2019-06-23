import express from 'express';
import bodyParser from 'body-parser';
import router from './routes';

// setup express app
const app = express();

// parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

const PORT = 5000;

app.listen(PORT);
