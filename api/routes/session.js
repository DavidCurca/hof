const connection = require('../db');

async function expired_session(session_id){
    /// return whether the session has expired or not
    let date;
    await new Promise((res, rej) => {
        connection.query('SELECT expiration FROM session WHERE id = ?', [session_id], function (err, results) {
            if (err) throw err;
            date = results[0].expiration;
            res(0);
        });
    });
    date = new Date(date);
    let now = new Date();
    return (date < now);
}

async function create_session(user_id){
    /// inserts a new row in session and updates session_id for admin
    let expiration = new Date();
    expiration.setDate(expiration.getDate() + 8);
    let new_id = 0;
    await new Promise((res, rej) => {
        connection.query('INSERT INTO session (expiration) VALUES (?)', [expiration], function (err, results) {
            if (err) throw err;
            new_id = results.insertId;
            res(0);
        });
    });
    console.log("created session " + new_id);
    await new Promise((res, rej) => {
        connection.query('UPDATE admin SET session_id = ? WHERE id = ?', [new_id, user_id], function (err) {
            if (err) throw err;
            res(0);
        });
    });
    return new_id;
}

async function delete_session(session_id){
    await new Promise((res, rej) => {
        connection.query('DELETE FROM session WHERE id = ?', [session_id], function (err, results) {
            if (err) throw err;
            res(0);
        });
    });
}

module.exports = {expired_session, create_session, delete_session}