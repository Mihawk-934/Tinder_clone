import express from 'express'
import mongoose from 'mongoose'
import Cards from './dbCards.js'
import Cors from 'cors'

// 1/ App config
//on creer une instance -->
const app = express();
//port d'ecoute de notre app -->
const port = process.env.PORT || 8001;
//url de connexion a la BDD -->
const connection_url = `mongodb+srv://admin:OPwxaXb8ZxoRkty1@cluster0.imkcv.mongodb.net/tinderdb?retryWrites=true&w=majority`

// 2/ Middlewares
app.use(express.json())
app.use(Cors())

// 3/ DB config
//connexion a la BDD -->
//les params permettent de rendre notre connexion tres fluide -->
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

// 4/ API endpoints
//racine de notre app -->
app.get('/', (req, res) => res.status(200).send('HELLO'))

app.post("/tinder/cards", (req, res) => {
    //on enregistre la demande.
    const dbCard = req.body;

    Cards.create(dbCard, (err, data) => {
        if (err)
            res.status(500).send(err) // 500 erreur serveru interne
        else
            res.status(201).send(data) //success creation Ok.
    })
})
//on va recuperer le resultat de notre endpoint precedent pour regarder les datas.
app.get("/tinder/cards", (req, res) => {
    Cards.find((err, data) => {
        if (err)
            res.status(500).send(err) //erreur serveru interne
        else
            res.status(200).send(data) //success creation Ok.
    })
})

// 5/ Listener
app.listen(port, () => console.log(`localhost ${port}`))