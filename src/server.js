'use strict'
const express = require('express');
const app = express();
app.use(express.json());


require('dotenv').config();


const cors = require("cors");
const { recordRouter } = require('./routes/records/records.routes');
const { userRouter } = require('./routes/users/users.routes');


app.use(cors());
app.use(recordRouter)
app.use(userRouter)


const port = process.env.PORT || 3001
app.listen(port, () => {
    console.log(`Server up and running on port ${port}`)
})


app.get('/', (_req, res) => {
    res.send('Hello World')
}
)

