import express, { json } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import joi from "joi";
import bcrypt from 'bcrypt';
dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

const users = [];



app.get('/users', async (req, res) => {
    res.send(users)
})


app.get('/entrys', async (req, res) => {
    const {mail} = req.body
    const user = users.find(e => e.mail === mail)

    res.send(user.movs)
})

app.post('/entrys', async (req, res) => {
   const {day, title, multiply, amount, mail} = req.body
   const user = users.find((e) => e.mail === mail)

   user.movs.push({day: day, title: title, multiply: multiply, amount: amount})
   res.send(user.movs)
})

const port = 5000;
app.listen(port, () => console.log(`Você está utilizando a porta ${port}`))