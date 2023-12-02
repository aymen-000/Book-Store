import { PORT , mongoURL } from './config.js'
import express from 'express'
import mongoose from 'mongoose' //we use it to connect database with our code 
import router from './routes/booksRoutes.js'
import cors from "cors"
const app = express()
app.use(express.json())
app.use(cors())
app.use("/books" , router)
mongoose
.connect("mongodb+srv://aymne011:YRWbYTAjARa76i1H@books.ey71h0r.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    app.listen(PORT , ()=>{console.log('conecting to the port 5555')})
    console.log("App connected to the database")
})
.catch((err)=>{
    console.error(err)
})