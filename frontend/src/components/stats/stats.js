import { redirect } from 'react-router-dom'
import './stats.scss'
import { Link, useNavigate } from 'react-router-dom';

function ContestCard(props) {
    const navigate = useNavigate();
    function redirectToContestPage(){
        navigate('/stats/contest?id='+ props.contestId);
    }

    return (
        <>
            <div className="contestCard" onClick={redirectToContestPage}>
                <h2>{props.contestName}</h2>
                <p>{props.contestDate}</p>
                <p>{props.contestCategory}</p>
            </div>
        </>
    )
}

function AddContestCard(props) {
    return(
        <div className="roundButton">
            <h1>
                +
            </h1>
        </div>
    )
}

export default function Stats(){

    function redirectToContestPage(){
        redirect("/stats/contest");
    }

    return (
        <>
            <h1 className='smt'>Concursuri Nationale</h1>
            <div className="Stats--page">
        
            
            <ContestCard contestName="Baraj ONI" contestDate="2023" contestCategory="juniori" ></ContestCard>
            <ContestCard contestName="Baraj ONI" contestDate="2023" contestCategory="juniori"></ContestCard>
            <ContestCard contestName="Baraj ONI" contestDate="2023" contestCategory="juniori"></ContestCard>
            <ContestCard contestName="Baraj ONI" contestDate="2023" contestCategory="juniori"></ContestCard>
            <ContestCard contestName="Baraj ONI" contestDate="2023" contestCategory="juniori"></ContestCard>
            <ContestCard contestName="Baraj ONI" contestDate="2023" contestCategory="juniori"></ContestCard>
            <ContestCard contestName="Baraj ONI" contestDate="2023" contestCategory="juniori"></ContestCard>
            <ContestCard contestName="Baraj ONI" contestDate="2023" contestCategory="juniori"></ContestCard>
            <ContestCard contestName="Baraj ONI" contestDate="2023" contestCategory="juniori"></ContestCard>
            <AddContestCard></AddContestCard>
            </div>
        </>
    )
}