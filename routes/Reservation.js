const express = require("express");
const router = express.Router();

const controller = require("../controllers/Reservation");

router.get("/Reservation", controller.getAll);
router.get("/Reservation/:id", controller.get);
router.post("/Reservation", controller.add);
router.put("/Reservation/:id", controller.edit);
router.delete("/Reservation/:id", controller.remove);

module.exports = router;
