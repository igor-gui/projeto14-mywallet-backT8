import joi from "joi";

const entrySchema = joi.object({
    day: joi.string.required(),
    title: joi.string.required().min(5),
    multiply: joi.number.required(),
    amount: joi.number.required(),
    mail: joi.string.mail().required()
})