import joi from "joi";

const userSchema = joi.object({
    name: joi.string.required().min(3),
    password: joi.string.required().min(5),
    mail: joi.string.required(),
})