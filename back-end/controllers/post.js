
const fs = require('fs');
const pool = require('../config/db');

// ok
exports.getAll = (req, res, next) => {
    let allPost = `SELECT * FROM groupomania.post ORDER BY postId DESC;`;
    pool.execute(allPost, function (err, result) {
        if (err) res.status(400).json({ err });
        res.status(200).json(result)
    });
}

// ok
exports.getOne = (req, res, next) => {
    let onePost = `SELECT * FROM groupomania.post WHERE postId=?;`;
    pool.execute(onePost, [req.params.id], function (err, result) {
        if (err) res.status(400).json({ err });
        res.status(200).json(result)
    });
}

// problème avec Multer => MulterError: Unexpected field
// maintenant crée le fichier mais la requête n'aboutit pas
exports.create = (req, res, next) => {

    const image = `${req.protocol}://${req.get('host')}/images/${req.file.name}`;
    // const image = (req.imageUrl) ?  `${req.protocol}://${req.get('host')}/images/post/${req.file.name}` : "";
    // console.log(image);
    const newPost = {
        authorId: req.body.userId,
        title: req.body.title,
        textPost: req.body.text,
        imageUrl: image,
    };
    console.log(newPost);
    let sql = `INSERT INTO groupomania.post (authorId, title, textPost, imageUrl) VALUES (?,?,?,?);`;
    pool.execute(sql, [newPost.authorId, newPost.title,  newPost.text, newPost.imageUrl], function (err, result) {
        if (err) throw err;
        res.status(201).json({ message: `Post ajouté` });
    });
};

// ok mais à implémenter pour d'autres modifications
exports.modify = (req, res, next) => {
    let searchPost = `SELECT * FROM groupomania.post WHERE postId=?;`;
    pool.execute(searchPost, [req.params.id], function (err, result) {
        if (err) res.status(400).json({ err });
        let found = result[0];
        console.log(found);
        if (found) {
            let updatePost = `UPDATE groupomania.post SET title=? WHERE postId=?`;
            pool.execute(updatePost, [req.body.title, req.params.id],function (err, result) {
                if (err) res.status(400).json({ err });
                result.status(201).json({ message: `post modifié` });
            });
        };
    })
}

// à tester
exports.delete = (req, res, next) => {
    let search = `SELECT * FROM groupomania.post WHERE postId=?`;
    pool.execute(search, [req.params.id], function (err, res) {
        if (err) res.status(400).json({ err });
        let found = result[0];
        if (!found) res.status(400).json({ message: "Cette identifiant ne correspond à aucun post" });
        else {
            if (found.authorId == req.body.userId || req.body.admin == true) {
                if (found.imageUrl != "") {
                    const content = found.imageUrl.split('/images/post/')[1];
                    fs.unlink(`images/post/${content}`, () => {
                        if (err) console.log(err);
                        else console.log('Image supprimée du dossier image');
                    })
                }
                let suppr = `DELETE FROM groupomania.post WHERE postId = ?`;
                pool.execute(suppr, [req.params.id], function (err, result) {
                    if (err) throw err;
                    res.status(201).json({ message: `Post supprimé` });
                });
            } else {
                res.status(401).json({message : "Action interdite, problème de droit"});
            }
        }
    });
};

// Ajouter gestion du compte de like