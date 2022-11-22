import { entrysCollection, usersCollection } from "../database/db.database.js"
import { entrySchema } from "../models/entry.model.js"


export async function postEntry(req, res) {
    const { day, title, multiply, amount, mail } = req.body
    const user = usersCollection.findOne((e) => e.mail === mail)

    try {
        const newEntry = { day, title, multiply, amount, userID: user._id }
        const { erro } = entrySchema.validate(newEntry, { abortEarly: false })

        if (erro) {
            const erros = erro.details.map((det) => det.message)
            return res.sendStatus(400).send(erros)
        }
        await entrysCollection.insertOne(newEntry)
        res.sendStatus(201)
    } catch (err) {
        res.sendStatus(500)
    }
}

export async function getEntrys(req, res) {
    const { mail } = req.body;

    try {
        const user = await usersCollection.findOne((e) => e.mail === mail)
        if (!user) {
            return res.sendStatus(401)
        }
        const entrys = await entrysCollection.find((e) => e._id === user._id).toArray()
        res.send(entrys)
    } catch (err) {
        console.log(err)
    }

}