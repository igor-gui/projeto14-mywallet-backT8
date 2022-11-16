import express, { json } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

const app = express()
app.use(json())
app.use(cors())


app.listen(5000, console.log('Você está utilizando a porta 5000'))