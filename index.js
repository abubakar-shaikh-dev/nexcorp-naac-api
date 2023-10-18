const express = require('express');
const db = require('./models')
const app = express();
app.use(express.json());

//Routers
const generalSettingsRouter = require('./routers/general-settings-router')
const iqacAuthorRouter = require('./routers/iqac-author-router')

//API Routes
app.use("/api/general-settings",generalSettingsRouter)
app.use("/api/iqac-author",iqacAuthorRouter)

app.listen(8000,async()=>{
    console.log("Server is running on port 8000");
    await db.sequelize.sync();
    console.log("Database is connected");
})