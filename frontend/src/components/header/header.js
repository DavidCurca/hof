import React, { useState } from 'react';
// import Logo from './romania.svg';
import './header.scss';
//import logged1 from './header.js';
import { Cookies, useCookies } from 'react-cookie';
import { Link, useNavigate } from 'react-router-dom';

export default function Header(props) {
    const [cookies, setCookie, removeCookie] = useCookies(['Username']);
    const navigate = useNavigate();
    const [accountStatus, SetAccountStatus] = useState("LOGIN");
    function redirectToAbout(){
        navigate("/About");
    }
    function redirectToLogin(){
        navigate("/SignIn");
    }
    function redirectToStats(){
        navigate("/Stats");
    }
    
    return (
        <>
            <div className="header--container">
                <img className="header--logo" src="romania.svg"></img>
                <h1 className="header--title">Romanian Informatics Hall of Fame</h1>
                <div className="header--interact">
                    <p className='header--About' onClick={redirectToAbout}>ABOUT</p>
                    <p className='header--Stats' onClick={redirectToStats}>STATS</p>
                    {cookies['session'] != undefined &&   <p className='header--Accounts' onClick={redirectToLogin}>ACCOUNT</p>}
                    {cookies['session'] == undefined &&   <p className='header--Accounts' onClick={redirectToLogin}>LOGIN</p>}
                  
                </div>
            </div>
        </>
    )
}