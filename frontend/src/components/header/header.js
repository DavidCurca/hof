import React from 'react';
import Logo from './romania.png';
import './header.scss';
export default function Header(props) {
    return (
        <>
            <div className="header--container">
                <img className="header--logo" src={Logo}></img>
                <h1 className="header--title">Romanian Informatics Hall of Fame</h1>
            </div>
        </>
    )
}