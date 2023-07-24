const express = require("express");
const sha256 = require("js-sha256");
const router = express.Router();
const connection = require('../db');
const {get_username, expired_session, create_session, delete_session, session_exists} = require('./session')
const { configDotenv } = require("dotenv");

router.get("/login", (req, res) => {
    username = req.query.username;
    password = req.query.password;
    if(username == undefined || req.query.password == undefined){
        res.json({succes: false, message: 'invalid params'})
    }else{
        let user_exists = false;
        connection.query("SELECT password, id, session_id FROM admin WHERE username = ?", [username], async function (err, results) {
            if (err) throw err;
            user_exists = true;
            if(results[0] == undefined){
                res.json({succes: false, message: 'username not found'})
            }else if(password == results[0].password){
                let id = results[0].id;
                let sesh_id = results[0].session_id;
                if(sesh_id == null){
                    sesh_id = await create_session(id);
                }else{
                    if(await expired_session(sesh_id)){
                        console.log("session " + sesh_id + " expired");
                        prev_id = sesh_id;
                        sesh_id = await create_session(id);
                        delete_session(prev_id);
                    }
                }
                res.json({succes: true, session: sesh_id})
            }else{
                res.json({succes: false, message: 'wrong password'})
            }
        });
    }
})

router.get("/get_username", async (req, res) => {
    session_id = req.query.id;
    if(session_id == undefined){
        res.json({succes : false, message: 'invalid params'})
    }else{
        if(await session_exists(session_id)){
            if(await expired_session(session_id)){
                res.json({succes : false, message: 'session expired'})
            }else{
                let name = await get_username(session_id)
                res.json({succes: true, username: name})
            }
        }else{
            res.json({succes: false, message: 'id does not exist'})
        }
    }
})

function create_account(username, password){
    hash = sha256(password);
    connection.query('INSERT INTO admin (username, password) VALUES (?)', [[username, hash]], function (err, results) {
        if (err) throw err;
    });
}

module.exports = router