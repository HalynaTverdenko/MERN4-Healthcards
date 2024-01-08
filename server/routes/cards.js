import express from 'express'
import Indcard from '../models/cardsModel.js'
import * as controller from '../controllers/controller.js'

const router = express.Router()

//GET - get all cards
router.get('/', controller.getIndcards)

//GET - get one card
router.get('/:id', controller.getIndcard)

//POST - post one cards
router.post('/', controller.createIndcard)

//PATCH - get all cards
router.patch('/:id', controller.updateIndcard)

//DELETE - get one card
router.delete('/:id', controller.deleteIndcard)

export default router