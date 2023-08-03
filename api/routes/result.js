const express = require("express");
const router = express.Router();
const {session_exists} = require('./session')
const connection = require('../db');

router.get("/addresult", (req, res) => {
    res.json({message: 'result added succesfuly'})
    sessionId = req.query.session;
    personId = req.query.person;
    contestId = req.query.contest;
    place = req.query.place;
    year = req.query.year;
    medal = req.query.medal;

    

})

module.exports = router;