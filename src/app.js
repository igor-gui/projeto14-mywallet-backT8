import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { entrysRouters } from './routers/entrys.router.js'
import { authRouters } from './routers/auth.router.js'

const app = express()
app.use(express.json())
app.use(cors())
app.use(entrysRouters)
app.use(authRouters)



const port = 5000;
app.listen(port, () => console.log(`Você está utilizando a porta ${port}`))