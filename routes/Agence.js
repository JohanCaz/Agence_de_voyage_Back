const express = require("express");
const router = express.Router();

const controller = require("../controllers/Agence");

// Traiter les requêtes GET vers /Agence
router.get("/Agence", controller.getAll);

// Traiter les requêtes POST vers /Agence
router.post("/Agence", controller.create);

// Traiter les requêtes PUT vers /Agence/:id
router.put("/Agence/:id", controller.update);

// Traiter les requêtes DELETE vers /Agence/:id
router.delete("/Agence/:id", controller.delete);

module.exports = router;
