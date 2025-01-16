//récupération des dépendances 
require('dotenv').config();
const express =  require("express");
const app = express();
const cors = require("cors");

// récuperation de la configuration de la bdd
require("./database/configDb");
// on indique que nous allons utiliser  express 
app.use(express.json());

// on accepte les requêtes  de toute origines
app.use(
    cors({
        origin: "*",
    })
);
// on indique le chemin des routes 
const routes =  require("./routes/product");
app.use(routes);

// on indique  que l'application va écouter sur le port 5000 et on retourne un message dans le terminal
app.listen(5000, () => {
    console.log("app listening on port 5000");
});

