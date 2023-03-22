const express = require("express");
const router = express.Router();

const controller = require("../controllers/Agence.controller");

// Traiter les requêtes GET vers /Agence
router.get("/", controller.getAll);

// Traiter les requêtes POST vers /Agence
router.post("/", controller.create);

// Traiter les requêtes PUT vers /Agence/:id
router.put("/:id", controller.update);

// Traiter les requêtes DELETE vers /Agence/:id
router.delete("/:id", controller.delete);

module.exports = router;
