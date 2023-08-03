const express = require("express");
const router = express.Router();
const connection = require('../db');

router.get("/addresult", (req, res) => {
    res.json({message: 'result added succesfuly'})
})

module.exports = router;