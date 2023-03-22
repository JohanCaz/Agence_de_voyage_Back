const express = require("express");
const router = express.Router();

const controller = require("../controllers/Client");

// Traiter les requêtes GET vers /Client
router.get("/Client", controller.getAll);

// Traiter les requêtes GET vers /Client/:id
router.get("/Client/:id", controller.get);

// Traiter les requêtes POST vers /Client
router.post("/Client", controller.add);

// Traiter les requêtes PUT vers /Client/:id
router.put("/Client/:id", controller.edit);

// Traiter les requêtes DELETE vers /Client/:id
router.delete("/Client/:id", controller.remove);

module.exports = router;
