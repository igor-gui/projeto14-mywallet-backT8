import { usersCollection, entrysCollection } from "../database/db.database.js";

export async function authValidation(req, res, next) {
    const { authorization } = req.headers;
    const token = authorization.replace('Bearer', '')

    if(!token){
        res.sendStatus(401)
    }

    try {
        const user = await usersCollection.findOne({token})
        if(!user){
            return res.sendStatus(401)
        }
        // req.user = user

    } catch (err){
        console.log(err)
    }



    next()
}