const express = require("express");
const router = express.Router();
const {session_exists} = require('./session')
const connection = require('../db');

medalLookup = ["", "Bronz", "Argint", "Aur"]

router.get("/addresult", (req, res) => {
    sessionId = req.query.session;
    personId = req.query.person;
    contestId = req.query.contest;
    place = req.query.place;
    year = req.query.year;
    medal = req.query.medal;

    if(sessionId == undefined || personId == undefined || contestId == undefined || contestId == undefined ||
       place == undefined || year == undefined || medal == undefined){
        res.json({status: false, message: 'one or more params are undefined'})
        return ;
    }

    if(!session_exists(sessionId)){
        res.json({status: false, message: 'invalid session'})
        return ;
    }
    medal = medalLookup[medal];

    /// INSERT INTO results (contest, person, place, medal, year) VALUES (contestId, personId, ...)

})

module.exports = router;