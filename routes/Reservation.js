const express = require("express");
const router = express.Router();

const controller = require("../controllers/Voyage");

router.get("/Voyage", controller.getAll);
router.get("/Voyage/:id", controller.get);
router.post("/Voyage", controller.add);
router.put("/Voyage/:id", controller.edit);
router.delete("/Voyage/:id", controller.remove);

module.exports = router;
