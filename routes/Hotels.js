const express = require("express");
const router = express.Router();

const controller = require("../controllers/Hotels");

// Traiter les requêtes GET vers /Hotels
router.get("/Hotels", controller.getAll);

// Traiter les requêtes GET vers /Hotels/:id
router.get("/Hotels/:id", controller.get);

// Traiter les requêtes POST vers /Hotels
router.post("/Hotels", controller.add);

// Traiter les requêtes PUT vers /Hotels/:id
router.put("/Hotels/:id", controller.edit);

// Traiter les requêtes DELETE vers /Hotels/:id
router.delete("/Hotels/:id", controller.remove);

module.exports = router;
