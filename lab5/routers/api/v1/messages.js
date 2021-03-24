const express = require("express");
const router = express.Router();
const messageController = require("../../../controllers/api/v1/messages");
router.post("/", controller.store);

router.get("/", messageController.getAll);

router.get("/:id", messageController.getId);

router.post("/", messageController.post);
router.put("/:id", messageController.update);
router.delete("/:id",messageController.remove);
module.exports = router;