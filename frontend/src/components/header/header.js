import React from 'react';
// import Logo from './romania.svg';
import './header.scss';
import { Link, useNavigate } from 'react-router-dom';
export default function Header(props) {
    const navigate = useNavigate();
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
                    <p className='header--About' onClick={redirectToAbout}>About</p>
                    <p className='header--Stats' onClick={redirectToStats}>Stats</p>
                    <p className='header--Accounts' onClick={redirectToLogin}>Login</p>
                </div>
            </div>
        </>
    )
}