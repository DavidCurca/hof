const express = require("express");
const router = express.Router();
const connection = require('../db');

async function getCategoryId(contestId){
    let ans = undefined;
    await new Promise((res, rej) => {
        connection.query('SELECT (category_id) FROM contest WHERE id = ?', [contestId], function (err, results) {
            if (err) throw err;
            if(results[0] != undefined){
                ans = results[0].category_id;
            }
            res(0);
        });
    });
    return ans;
}

router.get("/getid", async (req, res) => {
    if(req.query.id == undefined){
        res.json({status: false, message: 'invalid params'})
    }
    let category = await getCategoryId(req.query.id);
    if(category == undefined){
        res.json({status: false, message: 'category not found'});
        return ;
    }
    res.json({status: true, message: category})
})

module.exports = {router, getCategoryId};