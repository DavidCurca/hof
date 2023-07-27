import React from 'react';
// import Logo from './romania.svg';
import './header.scss';
export default function Header(props) {
    return (
        <>
            <div className="header--container">
                <img className="header--logo" src="romania.svg"></img>
                <h1 className="header--title">Romanian Informatics Hall of Fame</h1>
                <div className="header--interact">
                    <p className='header--About'>About</p>
                    <p className='header--Stats'>Stats</p>
                    <p className='header--Accounts'>Login</p>
                </div>
            </div>
        </>
    )
}