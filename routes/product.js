const router = require("express").Router();
const connection = require('../database/configDb')

// creation de la route pour récupérer toutes les données de la table products
// url : http://localhost:5000
router.get('/', (req,res) =>  {
    const sql = "SELECT * FROM product";
    connection.query(sql, (err, result) => {   
    if (err) throw err;
    res.status(200).json(result);
    });
});

module.exports = router;