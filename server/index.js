require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const modules = require('./models/models')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const path = require('path')

const PORT = process.env.PORT || 4000

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname,'static')))
app.use(fileUpload({}))
app.use('/api',router)

app.get('/', (req, res)=>{
    res.status(200).json({message:'API работает'})
})

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT,() => console.log(`server started in http://localhost:${PORT}`))

    }catch (e){
        console.log(e)
    }
}

start()
//>npm run dev