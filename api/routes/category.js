const express = require("express");
const router = express.Router();
const connection = require('../db');

async function getMetadataCategory(categoryId){
    let ans = undefined;
    await new Promise((res, rej) => {
        connection.query('SELECT name, priority FROM category WHERE id = ?', [categoryId], function (err, results) {
            if (err) throw err;
            ans = results[0];
            res(0);
        });
    });
    return ans;
}

router.get("/getmetadata", async (req, res) => {
    if(req.query.id == undefined){
        res.json({status: false, message: 'invalid params'})
    }
    let metadata = await getMetadataCategory(req.query.id);
    if(metadata == undefined){
        res.json({status: false, message: 'category not found'});
        return ;
    }
    res.json({status: true, message: metadata});
})

module.exports = {router, getMetadataCategory};