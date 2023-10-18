const express = require('express');
const db = require('./models')
const app = express();
app.use(express.json());



app.listen(8000,async()=>{
    console.log("Server is running on port 8000");
    await db.sequelize.sync();
    console.log("Database is connected");
})