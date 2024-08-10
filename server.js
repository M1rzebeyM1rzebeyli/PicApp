import express from "express";
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import connection from "./database/connection.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}))
app.use(express.static('public'))
app.set('view engine', 'ejs');

app.listen(port, function () {
    console.log(`Server is running on port ${port}`);
});
