import { Router } from 'express'
import { getEntrys, postEntry } from '../controllers/entrys.controllers.js'

const router = Router()


router.post('/entrys',postEntry)
router.get('/entrys', getEntrys)


export default router