// packages
import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

// utils
import connectDB from './config/db.js'
import userRoute from './routes/userRoute.js'
import categoryRoute from './routes/categoryRoute.js'

dotenv.config()
const port = process.env.PORT || 4000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use('/b6/users', userRoute)
app.use('/b6/category', categoryRoute)


app.listen(port, () => console.log(`Server running on port: ${port}`))
