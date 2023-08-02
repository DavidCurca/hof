import './stats.scss'


function ContestCard(props) {
    return (
        <>
            <div className="contestCard">
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
    return (
        <>
            <div className="Stats--page">
            <ContestCard contestName="Baraj ONI" contestDate="2023" contestCategory="juniori"></ContestCard>
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