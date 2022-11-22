import { Router } from 'express'
import { signIn, signUp } from '../controllers/auth.controllers.js'
import { authValidation } from '../middlewares/auth.validation.js'

const router = Router()
router.use(authValidation)


router.post('/sign-up',signIn)
router.post('/sign-in',signUp)

export default router