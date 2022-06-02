
const express = require("express");
const router = express.Router();
const commentCtrl = require("../controllers/comment");
const auth = require("../middleware/auth");

router.post("/", auth, commentCtrl.create);
router.put("/:id", auth, commentCtrl.modify);
router.delete("/:id", auth, commentCtrl.delete);
router.get("/:id", auth, commentCtrl.getAll);
router.get("/count/:id", auth, commentCtrl.getAllCount);

module.exports = router;