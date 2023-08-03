import React from "react";
import './hofErorr.scss';

export default function HofError(props) {
    console.log(props.errorMessage);
   
    return (
        <>
            <div className="Hof--error">        
                <img src="error-icon.png"></img>
                <div className="Hof--errorr">
                    <p>{props.errorMessage}</p>
                </div>
            </div>
        </>
    )
}