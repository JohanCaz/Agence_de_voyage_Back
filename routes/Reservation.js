const express = require("express");
const router = express.Router();

const controller = require("../controllers/Reservation");

// Traiter les requêtes GET vers /Reservation
router.get("/Reservation", controller.getAll);

// Traiter les requêtes GET vers /Reservation/:id
router.get("/Reservation/:id", controller.get);

// Traiter les requêtes POST vers /Reservation
router.post("/Reservation", controller.add);

// Traiter les requêtes PUT vers /Reservation/:id
router.put("/Reservation/:id", controller.edit);

// Traiter les requêtes DELETE vers /Reservation/:id
router.delete("/Reservation/:id", controller.remove);

module.exports = router;
