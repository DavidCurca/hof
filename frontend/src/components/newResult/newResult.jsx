import {React, useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import './newResult.scss'

export default function NewResult(){
    const [name, setName] = useState("");
    const [year, setYear] = useState(null);
    const [place, setPlace] = useState(null);
    const [exists, setExists] = useState(false);
    const [personId, setPersonId] = useState(1);
    const [medal, setMedal] = useState(null);
    const [contestId, setContesId] = useState(1);
    const [cookies, setCookie, removeCookie] = useCookies(['session']);
    const [logged, setLogged] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    function check_login(){
        let id = cookies['session'];
        if(id == undefined){
            setLogged(false)
            setLoaded(true);
        }else{
            fetch("/api/admin/get_username?id=" + id)
            .then((res) => res.json())
            .then((data) => {
                if(data.succes != undefined){
                    if(data.succes == false){
                        setLogged(false);
                    }else{
                        setUsername(data.username);
                        setLogged(true);
                    }
                    setLoaded(true);
                }
            })
        }
    }

    function addResult(e){
        e.preventDefault()
        console.log("name: " + name);
        console.log("id: " + contestId);
        console.log("place: " + place);
        console.log("year: " + year);
        console.log("medal: " + medal);

        fetch("/api/result/addresult?session=" + cookies['session'] + '&person=' + personId +
              "&contest=" + contestId + "&place="+ place + "&year=" + year + "&medal=" + medal)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        })
    }

    function checkExistance(){
        /// TODO: implement
    }

    useEffect(() => {
        check_login()
    }, []);

    return (
        <div className="wrapper">
            {username != "" &&
                <form>
                    <p><span style={{fontFamily: 'Courier Prime', fontWeight: '900'}}>{username}</span>, va adauga rezultatul</p>

                    <div style={{marginTop: '10px'}}>
                        <label for="name">Nume: </label>
                        <input type="text" id="name" name="name" onChange={(e) => {setName(e.target.value); checkExistance()}}/>
                        <br/>

                        {name != "" &&
                        <>
                            {exists === false && 
                                <p className="underText">Persoana <span className="bold">{name}</span> nu a fost gasita, <button onClick={() => {navigate("/new_person")}}>Creaz-o</button> </p>
                            }
                        </>
                        }
                    </div>

                    <div style={{marginTop: '10px'}}>
                        <label for="contest" value="1">Concurs:</label>
                        <select name="contest" id="contest" onChange={(e) => setContesId(e.target.value)}>
                            <option value="1">ONI</option>
                        </select> <br/>
                    </div>
                    <div style={{marginTop: '10px'}}>
                        <label for="year">An: </label>
                        <input type="number" id="year" name="year" onChange={(e) => setYear(e.target.value)}/><br></br>
                    </div>
                    <div style={{marginTop: '10px'}}>
                        <label for="place">Loc in clasament: </label>
                        <input type="number" id="place" name="place" onChange={(e) => setPlace(e.target.value)}/><br></br>
                    </div>
                    <div style={{marginTop: '10px'}}>
                        <label for="medal">Medalie:</label>
                        <select name="medal" id="medal" onChange={(e) => setMedal(e.target.value)}>
                            <option value="0">Niciuna</option>
                            <option value="3">Bronz</option>
                            <option value="2">Argint</option>
                            <option value="1">Aur</option>
                        </select><br/>
                    </div>
                    <button type="submit" onClick={addResult}>Adauga</button>
                </form>
            }
            {username === "" &&
                <p>aceasta pagina este menita doar adminilor!</p>
            }
        </div>
    )
}