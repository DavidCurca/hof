const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
    res.json({message: 'working fine & dandy'})
})

module.exports = router