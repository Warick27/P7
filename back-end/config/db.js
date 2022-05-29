require("dotenv").config();
const mysql = require('mysql2');

const hostDb = process.env.DB_HOST;
const userDb = process.env.DB_USER;
const passDb = process.env.DB_PASSWORD;
const nameDb = process.env.DB_DATABASE;

// création d'un pool de connexion pour gagner du temps en évitant les phases d'ouverture/fermeture de connexions
// creatConnection possible
const db = mysql.createPool({
    host: `${hostDb}`,
    user: `${userDb}`, 
    password: `${passDb}`, 
    database: `${nameDb}` 
});

db.getConnection(function(err){
    if (err) throw err;
    console.log("Connecté à la base de données MySQL!");
});

// db.connect(function(err){
//     if (err) throw err;
//     console.log("Connecté à la base de données MySQL!");
// });

module.exports = db;

// en cas de problème avec nodemon : source ~/.bash_profile