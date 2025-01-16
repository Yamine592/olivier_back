// récupération de la dépendance 
const mysql = require('mysql2');

// création d'une connexion avec les identifiants nécessaires
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "Sofip-2024",
    database: "shop",
});

// connexion à la base de données
connection.connect((err) => {
    if (err) throw err;
    console.log("Connected to the database");
});

// exporté la connection
module.exports= connection;
