const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const PORT = process.env.PORT | 8080;
const DB_URL = process.env.DB_URL;
const cors = require('cors');
const errorhandler = require('errorhandler');
const morgan = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
const authenticateRouter = require('./controllers/authenticate'),
passportMiddleware = require('./middleware/authentication')
app.use(cors({
    origin: "*",
    credentials: false
}))
app.use(morgan('dev'));
app.use(errorhandler());
app.use(passport.initialize());
app.use(express.json())
app.use('/authenticate', authenticateRouter)

app.get('/', (req, res) => {
    res.send("hello")
})

mongoose.connect(DB_URL).then(() =>
  app.listen(PORT, () => {
    console.log(`Up and run on ${PORT}`);
  })
).catch(e => console.log(e))


