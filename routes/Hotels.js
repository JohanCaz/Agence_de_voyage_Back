const express = require("express");
const router = express.Router();

const controller = require("../controllers/Client");

router.get("/Client", controller.getAll);
router.get("/Client/:id", controller.get);
router.post("/Client", controller.add);
router.put("/Client/:id", controller.edit);
router.delete("/Client/:id", controller.remove);

module.exports = router;
