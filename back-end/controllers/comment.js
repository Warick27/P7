const pool = require("../config/db");

exports.create = (req, res, next) => {
  const comment = {
    postId: req.body.postId,
    authorId: req.body.authorId,
    commentTxt: req.body.commentaire,
  };
  let sql = `INSERT INTO groupomania.comment (postId, authorId, commentaire) VALUES (?,?,?);`;
  pool.execute(
    sql,
    [comment.postId, comment.authorId, comment.commentTxt],
    function (err, result) {
      if (err) result.status(400).json({ err });
      res.status(201).json({ message: `Commentaire ajouté` });
    }
  );
};

exports.getAll = (req, res, next) => {
  let allComment = `SELECT postId, authorId, pseudo, date, commentaire FROM groupomania.comment INNER JOIN groupomania.user on authorId = user.id WHERE postId=? ORDER BY date DESC;`;
  pool.execute(allComment, [req.params.id], function (err, result) {
    const found = result[0];
    console.log(found);
    if (err) res.status(400).json({ err });
    else if (found == undefined) {
      return res
        .status(400)
        .json({ message: `Il n'y a pas de commentaire à ce post` });
    }
    res.status(200).json(result);
  });
};

exports.getAllCount = (req, res, next) => {
  let allCount = `SELECT postId,COUNT(*) as count FROM groupomania.comment WHERE postId=? GROUP By postId;`;
  pool.execute(allCount, [req.params.id], function (err, result) {
    const found = result;
    console.log(found);
    if (err) res.status(400).json({ err });
    else if (found == undefined) {
      return res
        .status(400)
        .json({ message: `Ce post n'a pas encore été commenté` });
    }
    res.status(200).json(result);
  });
};

exports.modify = (req, response, next) => {
  let searchComment = `SELECT * FROM groupomania.comment WHERE commentId=?;`;
  pool.execute(searchComment, [req.params.id], function (err, res) {
    if (err) res.status(400).json({ err });
    let found = res[0];
    if (found) {
      let updateComment = `UPDATE groupomania.comment SET commentaire=? WHERE commentId=?`;
      pool.execute(
        updateComment,
        [req.body.commentaire, req.params.id],
        function (err, res) {
          if (err) res.status(400).json({ err });
          response.status(201).json({ message: `commentaire modifié` });
        }
      );
    }
  });
};

// Ok, plus de messages d'erreur
exports.delete = (req, response, next) => {
  let search = `SELECT * FROM groupomania.comment WHERE commentId=?`;
  pool.execute(search, [req.params.id], function (err, res) {
    if (err) res.status(400).json({ err });
    let found = res[0];
    console.log(found);
    if (!found)
      response
        .status(400)
        .json({
          message: "Cette identifiant ne correspond à aucun commentaire",
        });
    else {
      if (found.authorId == req.body.userId || req.body.admin == true) {
        if (err) res.status(400).json({ err });
        let suppr = `DELETE FROM groupomania.comment WHERE commentId = ?`;
        pool.execute(suppr, [req.params.id], function (err, result) {
          if (err) result.status(400).json({ err });
          response.status(201).json({ message: `Commentaire supprimé` });
        });
      } else {
        response
          .status(401)
          .json({ message: "Action interdite, problème de droit" });
      }
    }
  });
};
