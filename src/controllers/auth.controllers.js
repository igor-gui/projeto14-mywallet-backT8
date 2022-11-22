import { sessionsCollection, usersCollection } from "../database/db.database";
import bcrypt from 'bcrypt'
import { v4 as uuidV4 } from 'uuid'

export async function signUp(req, res) {
    const { name, password, mail } = req.body
    const user = {
        name,
        password,
        mail,
    }

    try {
        const hashPassword = bcrypt.hashSync(user.password, 10)
        await usersCollection.insertOne({ ...user, password: hashPassword })
        res.sendStatus(201)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
}

export async function signIn(req, res) {
    const { mail, password } = req.body;
    const token = uuidV4()

    try {
        const theUserexists = await usersCollection.findOne({ mail })
        await sessionsCollection.insertOne({
            token,
            userId: theUserexists._id
        });
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
}
