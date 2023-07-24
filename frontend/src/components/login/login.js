import React, { useEffect, useState } from 'react';
import './login.scss';
import { sha256 } from 'js-sha256';

export default function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function send_request(e){
        e.preventDefault()
        let hash = sha256(password)
        /// fetch /api/admin/login
    }

    return (
        <>
            <div className='center'>
                <form>
                    <h1>Admin Login</h1>
                    <div className="txt_field">
                        <input type="text" id="fname" name="fname" required onChange={(e) => setUsername(e.target.value)}/>
                        <span></span>
                        <label for="fname">username:</label>
                    </div>
                    <div className="txt_field2">
                        <input type="password" id="lname" name="lname" required onChange={(e) => setPassword(e.target.value)}/> 
                        <span></span>
                        <label for="lname">password:</label>
                    </div>
                    <button type='submit' onClick={send_request}>submit</button>
                </form>
            </div>
        </>
    )
}