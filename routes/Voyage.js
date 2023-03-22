const express = require("express");
const router = express.Router();

const controller = require("../controllers/Voyage");

// Traiter les requêtes GET vers /Voyage
router.get("/Voyage", controller.getAll);

// Traiter les requêtes GET vers /Voyage/:id
router.get("/Voyage/:id", controller.get);

// Traiter les requêtes POST vers /Voyage
router.post("/Voyage", controller.add);

// Traiter les requêtes PUT vers /Voyage/:id
router.put("/Voyage/:id", controller.edit);

// Traiter les requêtes DELETE vers /Voyage/:id
router.delete("/Voyage/:id", controller.remove);

module.exports = router;
