const express = require('express');

const router = express.Router();

// Middleware gérant l'authentification
const auth = require('../middleware/auth');
// Middleware gérant l'importation et le stockage des images
const multer = require('../middleware/multer-config');

const postCtrl = require('../controllers/post');

// // Les différentes routes CRUD

// Ajouter un post
router.post('/', auth, multer, postCtrl.create);
// // Modifier un post
// router.put('/:id', auth, multer, postCtrl.modify)
router.put('/:id', auth, multer, postCtrl.modify)
// // Supprimer un post
// router.delete('/:id', auth, postCtrl.delete);
router.delete('/:id', auth, postCtrl.delete);
// Récupérer un post
router.get('/:id', auth, postCtrl.getOne);
// Récupérer tous les post
// router.get('/', auth, postCtrl.getAll);
router.get('/', auth, postCtrl.getAll);

// // Modérateur
// // Modifier un post
// router.put('/:id', auth, multer, postCtrl.modify);
// // Supprimer un post
// router.delete('/:id', auth, postCtrl.delete);

module.exports = router;