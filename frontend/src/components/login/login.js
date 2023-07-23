import React from 'react';
import './login.scss';

export default function Login(props) {
    return (
        <>
            <div className='login-wrapper'>
                <p>Admin Login</p>
                <form>
                    <label for="fname">First name:</label><br/>
                    <input type="text" id="fname" name="fname" value="John"/><br/>
                    <label for="lname">Last name:</label><br/>
                    <input type="text" id="lname" name="lname" value="Doe"/>
                </form>
            </div>
        </>
    )
}