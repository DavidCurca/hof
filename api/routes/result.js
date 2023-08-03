const express = require("express");
const router = express.Router();
const {session_exists} = require('./session')
const connection = require('../db');

medalLookup = ["", "Bronz", "Argint", "Aur"]

/*
 coloane care pot fi adaugate in result: judet, sex
*/

router.get("/addresult", async (req, res) => {
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

    await new Promise((res, rej) => {
        connection.query("INSERT INTO result (contest_id, person_id, place, medal, year) VALUES (?)", [[contestId, personId, place, medal, year]], function (err, results) {
            if (err){
                res.json({status: false, message: err});
                throw err;
            }
            console.log(results);
        });
    });
    res.json({status: true, message: 'added result succesfully'});

})

router.get("/getresults", async (req, res) => {
    id = req.query.id;
    console.log(id)
    if(id == undefined){
        res.json({status: false, message: 'invalid params'})
        return;
    }
    await new Promise((res, rej) => {
        connection.query("SELECT * FROM result WHERE person_id = ?", [id], function (err, results) {
            if (err){
                res.json({status: false, message: err});
                throw err;
            }
            console.log(results);
        });
    });
})

module.exports = router;