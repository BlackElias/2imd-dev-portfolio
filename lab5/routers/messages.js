const express = require("express");
const router = express.Router();

router.post("/", controller.store);

router.get("/:id", (req, res) => {
    res.json({


    });
});
module.exports = router;