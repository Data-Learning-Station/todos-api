import joi from 'joi'

export const createAccountSchema = joi.object({
    name: joi.string().min(4).required(),
    username: joi.string().min(5).required(),
    password: joi.string().min(4).required(),
})