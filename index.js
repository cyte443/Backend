require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({
    origin: true
}));
app.use(express.json());

app.use(express.static('public'));

app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/login', require('./routes/auth'));
app.use('/api/alumnos', require('./routes/alumnos'));

app.listen(process.env.PORT);