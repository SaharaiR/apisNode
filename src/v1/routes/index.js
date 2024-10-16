const express = require("express");
const router = express.Router();

router
    .route("/").get((req, res) => {
        res.send(`Desde ${req.baseUrl}`);
    });

module.exports = router;