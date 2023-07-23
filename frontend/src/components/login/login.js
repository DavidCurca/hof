import React from 'react';
import './login.scss';

export default function Login(props) {
    function check_sign_in(e){
        e.preventDefault(); 

    }
    return (
        <>
            <div className='center'>
                <form>
                    <h1>Admin Login</h1>
                    <div className="txt_field">
                        <input  type="text" id="fname" name="fname" required/>
                        <span></span>
                        <label for="fname">username:</label>
                    </div>
                    <div className="txt_field2">
                        <input type="password" id="lname" name="lname" required/> 
                        <span></span>
                        <label for="lname">password:</label>
                    </div>
                    <button type="submit"  onClick={check_sign_in}>submit</button>
                </form>
            </div>
        </>
    )
}