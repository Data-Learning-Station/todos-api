import joi from "joi";

export const createTodoSchema = joi.object({
    title: joi.string().required()
})

export const updateStatusSchema = joi.object({
    isCompleted: joi.boolean().required()
})

export const idParamSchema = joi.object({
    id: joi.number().min(1).required()
})