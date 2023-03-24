//Voyage

const express = require('express');
const router = express.Router();

const controller = require('../controllers/journey');

//Afficher tous les voyages
router.get('/journey', controller.getAll);
//Afficher les voyages par leur id
router.get('/journey/:id', controller.get);
//Ajouter un voyage
router.post('/journey', controller.add);
//Modifier un voyage
router.put('/journey/:id', controller.edit);
//Supprimer un voyage
router.delete('/journey/:id', controller.remove);

module.exports = router;