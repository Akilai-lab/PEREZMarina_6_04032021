const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const sauceCtrl = require('../controllers/sauce');
//un package qui nous permet de gérer les fichiers entrants dans les requêtes HTTP.
router.get('/', auth, sauceCtrl.getAllSauces);
//on va créer une route qui va récupérer des données à la bdd pour l'affichage des sauces
router.get('/:id', auth, sauceCtrl.getOneSauce);
//on va créer une route qui va récupérer des données à la bdd pour l'affichage d'une sauce par son id
router.post('/', auth, multer, sauceCtrl.createSauce);
//on va créer une route qui va envoyer des données à la bdd pour créer une sauce
router.post('/:id/like', auth, sauceCtrl.likeASauce);
//on va créer une route qui va envoyer des données à la bdd en cas de like ou dislike d'une sauce
router.put('/:id', auth, multer, sauceCtrl.modifySauce);
//on va créer une route qui va modifier des données à la bdd d'une sauce
router.delete('/:id', auth, sauceCtrl.deleteSauce);
//on va créer une route qui va supprimer des données à la bdd d'une sauce

module.exports = router;