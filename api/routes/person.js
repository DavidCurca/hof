const express = require("express");
const router = express.Router();
const connection = require('../db');

router.get("/getid", (req, res) => {

})

router.get("/getinfo", (req, res) => {
    
})

router.get("/getresult", (req, res) => {
    /*
        {
            name: ,
            graduation_year: ,
            external: ,
            results: {
                {
                    category_name: ''.
                    category_id: '',
                    
                    results : {
                        {
                            year: ,
                            place: ,
                            medal ,
                        }
                    }
                }
            }
        }
    */
})

module.exports = router;