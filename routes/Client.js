const express = require("express");
const router = express.Router();

const controller = require("../controllers/Client");

// Traiter les requêtes GET vers /Client
router.get("/Client", controller.getAllClient);

// Traiter les requêtes GET vers /Client/:id
router.get("/Client/:id", controller.getClientById);

// Traiter les requêtes POST vers /Client
router.post("/Client", controller.createClient);

// Traiter les requêtes PUT vers /Client/:id
router.put("/Client/:id", controller.updateClient);

// Traiter les requêtes DELETE vers /Client/:id
router.delete("/Client/:id", controller.deleteClient);

module.exports = router;
