const express = require("express");
const router = express.Router();

const controller = require("../controllers/journey-availability");

// Traiter les requêtes GET vers /journey-availability
router.get("/journey-availability", controller.getAll);

// Traiter les requêtes GET vers /journey-availability/:id
router.get("/journey-availability/:id", controller.get);

// Traiter les requêtes POST vers /journey-availability
router.post("/journey-availability", controller.add);

// Traiter les requêtes PUT vers /journey-availability/:id
router.put("/journey-availability/:id", controller.edit);

// Traiter les requêtes DELETE vers /journey-availability/:id
router.delete("/journey-availability/:id", controller.remove);

module.exports = router;
