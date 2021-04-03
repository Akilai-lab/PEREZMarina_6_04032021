const express = require('express');
const router = express.Router();

const userCtrl = require('./../controllers/auth');

router.post('/signup', userCtrl.signup);
//on va créer une route qui va envoyer des données à la bdd pour l'inscription
router.post('/login', userCtrl.login);
//on va créer une route qui va envoyer des données à la bdd pour la connection
module.exports = router;