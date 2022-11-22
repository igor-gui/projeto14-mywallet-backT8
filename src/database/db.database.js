import { MongoClient } from "mongodb"
import dotenv from 'dotenv'

dotenv.config()

const mongoClient = new MongoClient(process.env.MONGO_URI)

try {
    await mongoClient.connect();
    console.log('MongoDB conectado')
} catch (err) {
    console.log(err)
}

const db = mongoClient.db("MyWallet")

export const usersCollection = db.collection("users")
export const entrysCollection = db.collection("entrys")
export const sessionsCollection = db.collection("sessions")