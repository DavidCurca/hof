import {React, useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import './newResult.scss'
import HofError from "../hofError/hofError";
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
    const [error, setError] = useState(false)
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
    function checkExistance(){
        /// TODO: implement
        return false;
    }

    function addResult(e){
        e.preventDefault()
        console.log("name: " + name);
        console.log("id: " + contestId);
        console.log("place: " + place);
        console.log("year: " + year);
        console.log("medal: " + medal);
        if(checkExistance() === false){
            setError(true);
        }else{
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
    }

    

    function changeName(e){
        setError(false);
        setName(e.target.value);
    }
    function changeConcurs(e){
        /// TODO: implement an id matcher for any comp

    }
    function changeYear(e){
        setYear(e.target.value);
    }
    function changePlace(e){
        setPlace(e.target.value);
    }
    function something(e){

    }
    
    useEffect(() => {
        check_login()
    }, []);
  //  <HofError errorMessage={"Persoana " + name + " nu a fost gasita"}
    return (
        <>
        {error === true && <h1 style={{paddingLeft:"680px", paddingTop:"30px"}}>Something</h1>}
        <div>
             <div className="center">
                <form>
                     <p className="LabelForInput">Nume</p>
                        <input name='Nume' type='text' className="inputField" onChange={changeName}></input>
                     <p className="LabelForInput">Concurs</p>
                         <input name='Nume' type='text'className="inputField" ></input>
                     <p className="LabelForInput">An</p>
                         <input name='Nume' type='number' className="inputField" onChange={changeYear}></input>
                     <p className="LabelForInput">Loc in clasament</p>
                         <input name='Nume' type='number' className="inputField" onChange={changePlace}></input>
                     <p className="LabelForInput">Medalie</p>
                     <select className="Medal" name="medal">
                        <option value={3}>Aur</option>
                        <option value={2}>silver</option>
                        <option value={1}>bronz</option>
                        <option value={0}>niciuna</option>
                    </select>

                    <button type="submit" onClick={addResult}>Submit</button>
                </form>
            </div>
        </div>
         </>
    )
}