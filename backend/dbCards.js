//schema de BDD <=> modele
import mongoose from 'mongoose'

const cardSchema = mongoose.Schema({
    name: String,
    imgUrl: String
})

//nom de la collection a laquel on va ajouter dans notre BDD
export default mongoose.model('card', cardSchema);