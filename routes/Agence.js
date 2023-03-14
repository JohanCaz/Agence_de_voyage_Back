const express = require("express");
const router = express.Router();

const controller = require("../controllers/Agence");

router.get("/Agence", controller.getAll);

module.exports = router;
