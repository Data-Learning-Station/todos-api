import { Router } from 'express'
import { postAccount, deleteAccount } from '../controllers/account.controller'
import { createValidator } from 'express-joi-validation'
import { createAccountSchema } from '../validations/account.validation'
import authProtector from '../middlewares/auth-protector'

const accountRoutes = Router()
const validator = createValidator()

accountRoutes.post('/account', validator.body(createAccountSchema),  postAccount)
accountRoutes.delete('/account', authProtector, deleteAccount)

export default accountRoutes