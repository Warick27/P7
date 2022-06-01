const pool = require("../config/db");

exports.getLike = (req, res, next) => {
  let all = `SELECT * FROM groupomania.like;`;
  pool.execute(all, function (err, result) {
    if (err) res.status(400).json({ err });
    const postIdentifiant = parseInt(req.body.postId, 10);
    const userIdentifiant = parseInt(req.body.userId, 10);
    const couple = {
      postId: postIdentifiant,
      userId: userIdentifiant,
    };
    const keys = Object.entries(result);
    const existe = keys.find((element) => (element = couple));
    console.log(existe);
    if (!existe) {
      let queryNo = `UPDATE groupomania.post SET post.likes = post.likes + 1 WHERE postId=?`;
      pool.execute(queryNo, [req.body.postId], function (err, result) {
        console.log("like+1");
        if (err) res.status(400).json({ err });
        let add = `INSERT INTO groupomania.like (postId, userId) VALUES (?, ?)`;
        pool.execute(
          add,
          [req.body.postId, req.body.userId],
          function (err, result) {
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
// à tester
// exports.getLike= (req, res, next) => {
//     let all = `SELECT * FROM groupomania.like;`;
//     pool.execute(all, function (err, result) {
//       if (err) res.status(400).json({ err });
//       let userLiked = false;
//       const keys = Object.entries(result);
//       for (const res in keys) {
//           if (req.body.userId == result.userId && req.body.postId == result.postId) {
//               userLiked = true;
//           }
//       }
//       if (!userLiked) {
//           let queryYes = `UPDATE groupomania.post SET post.like = post.like - 1 WHERE postId=?`;
//           pool.execute(queryYes, [req.body.postId], function (err, result) {
//             console.log("like-1")
//             if (err) res.status(400).json({ err })
//             let suppr = `DELETE FROM groupomania.like WHERE postId=? AND userId=?`;
//             pool.execute(suppr, [req.body.postId, req.body.userId], function (err, result){
//               console.log("Supprimé des likes")
//                 if (err) res.status(400).json({ err })
//                 res.status(200).json(result)
//             });
//           });
//       } else {
//         let queryNo = `UPDATE groupomania.post SET post.like = post.like + 1 WHERE postId=?`;
//         pool.execute(queryNo, [req.body.postId], function (err, result) {
//           console.log("like+1");
//           if (err) res.status(400).json({ err })
//           let add = `INSERT INTO groupomania.like (postId, userId) VALUES (?, ?)`;
//           pool.execute(add, [req.body.postId, req.body.userId], function (err, result){
//             console.log("Ajouté aux likes")
//               if (err) res.status(400).json({ err })
//               res.status(201).json(result)
//           });
//         });
//       }
//     });
//   }

// exports.getLike = (req, res, next) => {
//   let all = `SELECT * FROM groupomania.like;`;
//   pool.execute(all, function (err, result) {
//     if (err) res.status(400).json({ err });
//     const postIdentifiant = parseInt(req.body.postId, 10);
//     const userIdentifiant = parseInt(req.body.userId, 10);
//     const couple = {
//       postId: postIdentifiant,
//       userId: userIdentifiant,
//     };
//     // console.log(couple);
//     // const keys = Object.entries(result);
//     console.log(result);
//     console.log(Object.values(result));
//     console.log(Object.keys(Object.values(result)));
//     // const resultat = [];

//     var found = "";
//     console.log(result);
//     function Test(a) {
//       const b = JSON.stringify(a);
//       if ((b === couple)) {
//         console.log("j'ai trouvé");
//         console.log(b);
//         found = "true";
//         console.log(found);
//       } else {
//         console.log("pas trouvé");
//         found = "false";
//         console.log(found);
//       }
//     }
//     result.forEach((el) => Test(el));

// for (item in keys) {
//   if (keys[item].postId = couple.postId) {
//     found = false;
//      console.log("jai cherché");

//   } else {
//      console.log("oups j'ai oublié");
//      found = false;
//   }
// }
// console.log(found);

//     if (found === "false") {
//       let queryNo = `UPDATE groupomania.post SET post.like = post.like + 1 WHERE postId=?`;
//       pool.execute(queryNo, [req.body.postId], function (err, result) {
//         console.log("like+1");
//         if (err) res.status(400).json({ err });
//         let add = `INSERT INTO groupomania.like (postId, userId) VALUES (?, ?)`;
//         pool.execute(
//           add,
//           [req.body.postId, req.body.userId],
//           function (err, result) {
//             console.log("Ajouté aux likes");
//             if (err) res.status(400).json({ err });
//             res.status(201).json(result);
//             return console.log("fait");
//           }
//         );
//       });
//     } else {
//       let queryYes = `UPDATE groupomania.post SET post.like = post.like - 1 WHERE postId=?`;
//       pool.execute(queryYes, [req.body.postId], function (err, result) {
//         console.log("like-1");

//         if (err) res.status(400).json({ err });
//         let suppr = `DELETE FROM groupomania.like WHERE postId=? AND userId=?`;
//         pool.execute(
//           suppr,
//           [req.body.postId, req.body.userId],
//           function (err, result) {
//             console.log("Supprimé des likes");
//             if (err) res.status(400).json({ err });
//             res.status(200).json(result);
//             return console.log("pas fait");
//           }
//         );
//       });
//     }
//   });
// };

// fonctionne avec 1 user

// exports.getLikeCount = (req, res, next) => {
//   LikeDb.findAndCountAll({
//     where: { postId: req.params.id },
//     limit: 99,
//     offset: 12,
//   })
//     .then((result) => {
//       res.status(200).json(result);
//     })
//     .catch((err) => console.log(err));
// };

//   // liste des posts likés par un user
//   exports.liked = (req, res, next) => {
//     let sql2 = `SELECT postId FROM like WHERE userId = ?`;
//     pool.execute(sql2,[req.body.userId], function (err, result) {
//         if (err) res.status(400).json({ err });
//         res.status(200).json(result)
//     });
// }
