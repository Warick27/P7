const express = require('express');
const router = express.Router();
const userCtrl = require("../controllers/user");
// const multer = require('../middleware/multer-config');

// Middleware gérant l'authentification
const auth = require('../middleware/auth');

// importation du middleware de validation pour la création de l'email et du mot de passe
const validation = require('../middleware/validation');


// Routes pour créer un utilisateur, pour qu'il se loggue, modifie son profil et le supprime

router.post("/signup", validation, userCtrl.signup);
router.post("/login", userCtrl.login);
router.put("/:id", userCtrl.modify);
router.delete("/:id", auth, userCtrl.delete);
router.get("/", auth, userCtrl.getAll);
router.get("/:id", auth, userCtrl.getOne);
// router.post("/signup", validation, userCtrl.signup);
// router.put("/modify/:id", auth, multer, userCtrl.modifyProfile);
// router.delete("/delete/:id", auth, userCtrl.delete);


module.exports = router;