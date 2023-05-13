import { Router } from 'express'
import { getTodos, postTodos, putTodos, patchTodos, deleteTodos } from '../controllers/todos.controller'
import { createValidator } from 'express-joi-validation'

import authProtector from '../middlewares/auth-protector'
import { createTodoSchema, idParamSchema, updateStatusSchema } from '../validations/todo.validation'

const todoRoutes = Router()
const validator = createValidator()

todoRoutes.use(authProtector)

todoRoutes.get('/todos', getTodos)
todoRoutes.post('/todos', validator.body(createTodoSchema), postTodos)
todoRoutes.put('/todos/:id', validator.params(idParamSchema), validator.body(createTodoSchema), putTodos)
todoRoutes.patch('/todos/:id', validator.params(idParamSchema), validator.body(updateStatusSchema), patchTodos)
todoRoutes.delete('/todos/:id', validator.params(idParamSchema), deleteTodos)

export default todoRoutes