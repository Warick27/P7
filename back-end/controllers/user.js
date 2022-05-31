//  Bcrypt algorithme de hash 
const bcrypt = require('bcrypt');
// pour créer des Token d'identification
const jwt = require('jsonwebtoken');
// Permet d'utiliser des variables d'environnement
require("dotenv").config();
const secret = process.env.SECRET_TOKEN;
const time = process.env.EXPIRE_TOKEN;

// Permet de masquer les adresses emails
const maskemail = require('maskemail');
const pool = require('../config/db');

// créer : ok; déjà existant : ok, données; manquantes dans requête : throw err
// Création d'un nouvel utilisateur
exports.signup = (req, response, next) => {
  let search = `SELECT * FROM groupomania.user WHERE email=?`;
  pool.execute(search, [req.body.email], function (err, res) {
    if (err) res.status(400).json({ err });
    let found = res[0];
    console.log(found);
    if (!found) {
      bcrypt.hash(req.body.password, 10)
      .then(hash => {
        const user = {
          email: maskemail(req.body.email, { allowed: /@\.-/ }),
          password: hash,
          pseudo: req.body.pseudo
        }
        console.log(user);
        let add = `INSERT INTO groupomania.user (email, password, pseudo) VALUES (?, ?, ?)`;
        pool.execute(add, [user.email, user.password, user.pseudo], function (err, result){
          if (err) result.status(400).json({ error })
          response.status(201).json({
            pseudo: user.pseudo,
            userId: result.insertId,
            message: 'Utilisateur créé !',
            token: jwt.sign(
              { userId: result.insertId },
              `${secret}`,
              { expiresIn: `${time}`}
            )
          });
          // console.log(result) 
        })
      })
      .catch(error => result.status(500).json({ error }));
    }
    else {
      return response.status(400).json({ message: 'cet email est déjà utilisé !'});
    }
  })
};

// log correct: ok, mdp faux : ok; user non trouvé: ok
// Connexion d'un utilisateur
exports.login = (req, response, next) => {
  let search = `SELECT * FROM groupomania.user WHERE email=?`;
  pool.execute(search, [maskemail(req.body.email, { allowed: /@\.-/ })], function (err, res) {
    let user = res[0];
    console.log(user);
    if (err) res.status(400).json({ error })
    if (!user) {
      return response.status(401).json({ error: 'Utilisateur non trouvé !' });
    }
    bcrypt.compare(req.body.password, user.password)
      .then(valid => {
        console.log(valid);
        if (!valid) return response.status(401).json({ error: 'Mot de passe incorrect !' });
        
        response.status(200).json({
          pseudo: user.pseudo,
          userId: user.id,
          token: jwt.sign(
            { userId: user.id },
            `${secret}`,
            { expiresIn: `${time}`}
          )
        });
      })
        .catch(error => response.status(500).json({ error }));
    })
  }

// Suppresion d'un utilisateur: ok
exports.delete = (req, response, next) => {
  let search = `SELECT * FROM groupomania.user WHERE id=?`;
  pool.execute(search, [req.params.id], function (err, res) {
    let user = res[0];
    if (err) res.status(400).json({ error })
    bcrypt.compare(req.body.password, user.password)
    .then(match => {
        if (!match) return response.status(401).json({ error: " Mot de passe incorrect !" });
         else {
            bcrypt.hash(req.body.password, 10)
                .then(hash => {
                    let sql = `DELETE FROM groupomania.user WHERE id=?`;
                    pool.execute(sql, [req.params.id], function (err, result) {
                        if (err) result.status(400).json({ error });
                        response.status(200).json({ pseudo: user.pseudo, message: `Le compte numéro ${req.params.id} a bien été supprimé` });
                    });
                })
                .catch(error => response.status(500).json({ error }));
        }
    })
  })
}

// Ok
exports.modify = (req, res, next) => {
  let search = `SELECT * FROM groupomania.user WHERE id=?`;
  pool.execute(search, [req.params.id], function (err, result) {
    if(err) throw err;
    let user = result[0];
    console.log(user);
    // previousPassword
    bcrypt.compare(req.body.oldPassword, user.password)
    .then(match => {
      console.log(match);
        if (!match) {
            return res.status(401).json({ error: " Mot de passe incorrect !" });
        } else {
            bcrypt.hash(req.body.newPassword, 10)
                .then(hash => {
                    let sql = `UPDATE groupomania.user SET password=?, pseudo=? WHERE id=?`;
                    pool.execute(sql, [hash, req.body.pseudo, req.params.id], function (err, resultat) {
                        if (err) throw err;
                        console.log(resultat);
                        res.status(201).json({ message: `Le compte numéro ${req.params.id} a bien été modifié` });
                    });
                })
                .catch(error => res.status(500).json({ error }));
        }
    })
    .catch(error => res.status(500).json({ message: "Erreur authentification" }));
  })
}

// a voir pour la suppression des images correspondantes

// ok

// voir si on peut sélectionner les finos à mettre dans la réponse SQL
exports.getOne = (req, res, next) => {
  let one = `SELECT * FROM groupomania.user WHERE user.id=?;`;
  pool.execute(one, [req.params.id], function (err, result) {
      if (err) res.status(400).json({ err });
      res.status(200).json(result)
  });
}

// ok
exports.getAll = (req, res, next) => {
  let all = `SELECT * FROM user;`;
  pool.execute(all, function (err, result) {
    if (err) res.status(400).json({ err });
    res.status(200).json(result)
  });
}