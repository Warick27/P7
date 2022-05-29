const pool = require('../config/db');

// à tester
exports.getLike= (req, res, next) => {
    let all = `SELECT * FROM groupomania.like;`;
    pool.execute(all, function (err, result) {
      if (err) res.status(400).json({ err });
      let found = false;
      for (item of result) {
          if (req.body.userId == result.userId && req.body.postId == result.postId){
              found = true;
          }
      }
      if (found) {
          let queryYes = `UPDATE groupomania.post SET post.like = post.like - 1 WHERE postId=?`;
          pool.execute(queryYes, function (err, result) {
            if (err) res.status(400).json({ err })
            let suppr = `DELETE FROM groupomania.like WHERE postId=? AND userId=?`;
            pool.execute(suppr, function (err, result){
                if (err) res.status(400).json({ err })
                res.status(200).json(result)
            });
          });
      } else {
        let queryNo = `UPDATE groupomania.post SET post.like = post.like + 1 WHERE postId=?`;
        pool.execute(queryNo, function (err, result) {
          if (err) res.status(400).json({ err })
          let add = `INSERT INTO groupomania.like (postId, userId) VALUES (?, ?)`;
          pool.execute(add, [req.body.postId, req.body.userId], function (err, result){
              if (err) res.status(400).json({ err })
              res.status(200).json(result)
          });
        });
      }
    });
  }

//   // liste des posts likés par un user
//   exports.liked = (req, res, next) => {
//     let sql2 = `SELECT postId FROM like WHERE userId = ?`;
//     pool.execute(sql2,[req.body.userId], function (err, result) {
//         if (err) res.status(400).json({ err });
//         res.status(200).json(result)
//     });
// }