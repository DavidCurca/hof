import './contest.scss';
//import useState from 'react'
import React, { useEffect, useState } from 'react';


export default function Contest(props) {
    const contestName =  "baraj ONI juniori";
    const [theme, setTheme] = React.useState('modern');

    function changeTheme(){
        setTheme('classic');
    }

    return (    
        <>  
        {theme === 'modern' &&
            <div className='container1'>
                <h1 className='ContestTitle'>{contestName}</h1>
                <div className='Center'>
                    <div className='results'>
                        <div className='Podium'>
                        
                            <div className='secondPlace'>
                                <h4>Name</h4>
                                <div className='silver'></div>
                            </div>
                            
                            <div className='firstPlace'>
                                <h4>Name</h4>
                                <div className='gold'></div>
                            </div>
                        
                            <div className='thirdPLace'>
                                <h4>Name</h4>
                                <div className='bronz'></div>
                            </div>
                        </div>
                        <div className='Placement'>
                            <p>Nume</p>
                            <p>Nume</p>
                            <p>Nume</p>
                            <p>Nume</p>
                            <p>Nume</p>
                        </div>
                    </div>
                </div>
            </div>
        }
        {
            theme === 'classic' &&
            <div>
                classic
            </div>
        }
        </>
    )
}