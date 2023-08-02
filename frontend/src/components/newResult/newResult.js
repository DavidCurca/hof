import React from "react";
import './newResult.scss'

export default function NewResult(){
    return (
        <div className="wrapper">
            <form>
                <label for="name">Nume: </label>
                <input type="text" id="name" name="name"/><br/>
                <div style={{marginTop: '10px'}}>
                    <label for="contest" value="1">Concurs:</label>
                    <select name="contest" id="contest">
                        <option value="1">ONI</option>
                    </select> <br/>
                </div>
                <div style={{marginTop: '10px'}}>
                    <label for="year">An: </label>
                    <input type="number" id="year" name="year" value="2023"/><br></br>
                </div>
                <div style={{marginTop: '10px'}}>
                    <label for="place">Loc in clasament: </label>
                    <input type="number" id="place" name="place"/><br></br>
                </div>
                <div style={{marginTop: '10px'}}>
                    <label for="medal">Medalie:</label>
                    <select name="medal" id="medal">
                        <option value="">Niciuna</option>
                        <option value="3">Bronz</option>
                        <option value="2">Argint</option>
                        <option value="1">Aur</option>
                    </select><br/>
                </div>
                <button type="submit">Adauga</button>
            </form>
        </div>
    )
}