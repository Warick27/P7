
const express = require("express");
const router = express.Router();
const commentCtrl = require("../controllers/comment");
// const auth = require("../middleware/auth");

router.post("/", commentCtrl.create);
router.put("/:id", commentCtrl.modify);
router.delete("/:id", commentCtrl.delete);
router.get("/:id", commentCtrl.getAll);


// router.post("/",auth, commentCtrl.create);
// router.put("/",auth, commentCtrl.modify);
// router.get("/",auth, commentCtrl.getAll);
// router.get("/",auth, commentCtrl.getOne);
// router.delete("/:commentId/:postId", auth, commentCtrl.delete);

module.exports = router;