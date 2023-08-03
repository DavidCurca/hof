const express = require("express");
const router = express.Router();
const {getCategoryId} = require('./contest');
const connection = require('../db');

router.get("/getid", (req, res) => {

})

router.get("/getinfo", (req, res) => {

})

router.get("/getresult", (req, res) => {
    /// getinfo + /api/result/getresults
    /*
        - categorii
            - concusuri
                rezultate
    */
})

module.exports = router;