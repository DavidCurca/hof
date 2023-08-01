import React from "react";
import './person.scss';

export default function Person(props) {
    return (
        <>
            <div className="personWrapper">
                <div className="info">
                    <p className="name">Popescu Ion</p>
                    <p className="gradYear">Anul absolvirii: <span className="mono">2028</span></p>
                </div>
                <div>
                    <table className="results">
                        <tr>
                            <th className="fstCol">
                                <p>Concurs</p>
                            </th>
                            <th className="yearCol">
                                <div>
                                    <p>2020</p>
                                    <p>IV</p>
                                </div>
                            </th>
                            <th className="yearCol">
                                <div>
                                    <p>2021</p>
                                    <p>V</p>
                                </div>
                            </th>
                            <th className="yearCol">
                                <div>
                                    <p>2022</p>
                                    <p>VI</p>
                                </div>
                            </th>
                            <th className="yearCol">
                                <div>
                                    <p>2023</p>
                                    <p>VII</p>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th className="category" colSpan={5}>Loturi, Baraje Nationale</th>
                        </tr>
                        <tr>
                            <th>Cupa SEPI Juniori</th>
                            <th>-</th>
                            <th>-</th>
                            <th>-</th>
                            <th>8</th>
                        </tr>
                        <tr>
                            <th>Lot Largit Juniori</th>
                            <th>-</th>
                            <th>-</th>
                            <th>-</th>
                            <th>5</th>
                        </tr>
                        <tr>
                            <th className="category" colSpan={5}>Competitii Nationale</th>
                        </tr>
                        <tr>
                            <th>ONI</th>
                            <th>-</th>
                            <th>3</th>
                            <th>3</th>
                            <th>7</th>
                        </tr>

                        <tr>
                            <th className="category" colSpan={5}>Competitii Judetene</th>
                        </tr>
                        <tr>
                            <th>OJI</th>
                            <th>5</th>
                            <th>1</th>
                            <th>1</th>
                            <th>1</th>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    )
}