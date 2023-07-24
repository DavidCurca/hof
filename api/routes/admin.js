const express = require("express");
const router = express.Router();
const connection = require('../db')

router.get("/test", (req, res) => {
    connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results[0].solution);
        res.json({'1+1 = ': results[0].solution})
    });
})

module.exports = router