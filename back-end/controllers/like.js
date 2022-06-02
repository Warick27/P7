const pool = require("../config/db");

exports.getLike = (req, res, next) => {
  const postIdentifiant = parseInt(req.body.postId, 10);
  const userIdentifiant = parseInt(req.body.userId, 10);
  let all = `SELECT * FROM groupomania.like WHERE postId=? and userId=?;`;
  pool.execute(all, [postIdentifiant, userIdentifiant], function (err, result) {
    if (err) res.status(400).json({ err });
    if (result.length == 0) {
      let queryNo = `UPDATE groupomania.post SET post.likes = post.likes + 1 WHERE postId=?`;
      pool.execute(queryNo, [req.body.postId], function (err, resultat) {
        console.log("like+1");
        if (err) res.status(400).json({ err });
        let add = `INSERT INTO groupomania.like (postId, userId) VALUES (?, ?)`;
        pool.execute(
          add,
          [req.body.postId, req.body.userId],
          function (err, resultout) {
            console.log("Ajouté aux likes");
            if (err) res.status(400).json({ err });
            res.status(201).json(result);
            return console.log("fait");
          }
        );
      });
    } else {
      let queryYes = `UPDATE groupomania.post SET post.likes = post.likes - 1 WHERE postId=?`;
      pool.execute(queryYes, [req.body.postId], function (err, result) {
        console.log("like-1");
        if (err) res.status(400).json({ err });
        let suppr = `DELETE FROM groupomania.like WHERE postId=? AND userId=?`;
        pool.execute(
          suppr,
          [req.body.postId, req.body.userId],
          function (err, result) {
            console.log("Supprimé des likes");
            if (err) res.status(400).json({ err });
            res.status(200).json(result);
            return console.log("pas fait");
          }
        );
      });
    }
  });
};
