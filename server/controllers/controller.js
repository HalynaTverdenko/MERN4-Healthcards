import Indcard from '../models/cardsModel.js'
import mongoose from 'mongoose'

//GET all cards
export const getIndcards = async (req, res) => {
    const cards = await Indcard.find({}).sort({createdAt: -1})
    res.status(200).json(cards)
}
 
//GET one card
export const getIndcard = async (req, res) => {
    const {id} = req.params 
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'There is no such cards in database'})
    }
    const card = await Indcard.findById(id)
    if(!card) {
        return res.status(404).json({error: 'There is no such cards in database'})
    }
    res.status(200).json(card)
}

//POST one card
export const createIndcard = async (req, res) => {
    const {name, breed, birthdate, pass, vaccination, antigelm, food, photo} = req.body
    try {
        const card = await Indcard.create({name, breed, birthdate, pass, vaccination, antigelm, food, photo})
        res.status(201).json(card)
    }
    catch (error) {
        res.status(400).json({error: error.message})
    }
}

//PATCH - get all cards 
export const updateIndcard = async (req, res) => {
    const {id} = req.params 
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'There is no such cards in database'})
    }
    const card = await Indcard.findOneAndUpdate({_id: id}, {...req.body})
    if(!card) {
        return res.status(404).json({error: 'There is no such cards in database'})
    }
    res.status(200).json(card)
}

//Delete one card 
export const deleteIndcard = async (req, res) => {
    const {id} = req.params 
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'There is no such card in database'})
    }
    const card = await Indcard.findOneAndDelete({_id: id})
    if(!card) {
        return res.status(404).json({error: 'There is no such card in database'})
    }
    res.status(200).json(card)
}