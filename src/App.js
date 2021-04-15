import React, {useState, useEffect} from "react"
import Piece from "./Piece";
import DownloadImageButton from "./DownloadImageButton";
import DownloadInfoButton from "./DownloadInfoButton";
import HelpModal from "./HelpModal";
import './App.css';


function App(props) {
    const [bottomLineLength, setBottomLineLength] = useState(300);
    const [aspectRatio, setAspectRatio] = useState(1.1)
    const [topDegree, setTopDegree] = useState(144);
    const [bottomDegree, setBottomDegree] = useState(81);
    const [topCoords, setTopCoords] = useState([0, 0]);
    const [middleLeftCoords, setMiddleLeftCoords] = useState([0, 0]);
    const [middleRightCoords, setMiddleRightCoords] = useState([0, 0]);
    const [bottomLeftCoords, setBottomLeftCoords] = useState([0, 0]);
    const [bottomRightCoords, setBottomRightCoords] = useState([0, 0]);
    const [pieceColor, setPieceColor] = useState("#AD7D45");

    const doChangeAspectRatio = ((event) => {
        setAspectRatio(event.target.value)
    })

    const doChangeTopDegree = ((event) => {
        setTopDegree(event.target.value)
    })

    const doChangeBottomDegree = ((event) => {
        setBottomDegree(event.target.value)
    })

    const doChangePieceColor = ((event) => {
        setPieceColor(event.target.value)
    })

    useEffect(() => {
        const topRadian = topDegree * (Math.PI / 180);
        const bottomRadian = bottomDegree * (Math.PI / 180);
        const a = bottomLineLength * (aspectRatio * Math.cos(bottomRadian) - (Math.sin(bottomRadian) / 2)) / Math.cos(bottomRadian + (topRadian / 2))
        let qX = a * Math.sin(topRadian / 2)
        let qY = a * Math.cos(topRadian / 2)
        qX = Math.round(qX * 100) / 100
        qY = Math.round(qY * 100) / 100
        let rX = bottomLineLength / 2
        let rY = bottomLineLength * aspectRatio
        rY = Math.round(rY * 100) / 100
        setMiddleLeftCoords([-qX, qY])
        setMiddleRightCoords([qX, qY])
        setBottomLeftCoords([-rX, rY])
        setBottomRightCoords([rX, rY])
    }, [bottomLineLength, aspectRatio, topDegree, bottomDegree])

    return <div>
        <header className="card-header has-background-shogiapp block">
            <img src="logo.png" alt="logo"/>
        </header>

        <div className="container">
            <h1 className="subtitle is-3 has-text-centered margin-text">スライダーを動かしてお気に入りの駒を作ってみましょう！</h1>
            <div className="columns is-desktop has-text-centered">
                <div className="column">
                    <div className="has-text-centered px-6">
                        <form className="block subtitle is-6">
                            Color: <input type="color" id="head" name="head" value={pieceColor}
                                          onChange={doChangePieceColor}/>
                        </form>
                        <Piece topCoords={topCoords} middleLeftCoords={middleLeftCoords}
                               middleRightCoords={middleRightCoords}
                               bottomLeftCoords={bottomLeftCoords} bottomRightCoords={bottomRightCoords}
                               pieceColor={pieceColor}/>
                    </div>
                </div>
                <div className="column has-text-centered">
                    <div className="px-6">
                        <div className="block">
                            <h2 className="is-5 has-text-centered subtitle">縦横比: {aspectRatio}</h2>
                            <input className="slider is-fullwidth is-circle" step="0.01" min="0.8" max="1.5"
                                   value={aspectRatio} type="range" onChange={doChangeAspectRatio}/>
                            <h2 className="is-5 has-text-centered subtitle">頂角: {topDegree}°</h2>
                            <input className="slider is-fullwidth is-circle" step="0.1" min="100" max="180"
                                   value={topDegree} type="range" onChange={doChangeTopDegree}/>
                            <h2 className="is-5 has-text-centered subtitle">底角: {bottomDegree}°</h2>
                            <input className="slider is-fullwidth is-circle" step="0.1" min="70" max="90"
                                   value={bottomDegree} type="range" onChange={doChangeBottomDegree}/>
                        </div>

                        <table className="block table is-bordered is-striped is-fullwidth">
                            <tbody>
                            <tr>
                                <th>頂角の座標</th>
                                <td>[{topCoords.map((x => x.toFixed(2))).join(", ")}]</td>
                            </tr>
                            <tr>
                                <th>中角(左)の座標</th>
                                <td>[{middleLeftCoords.map((x => x.toFixed(2))).join(", ")}]</td>
                            </tr>
                            <tr>
                                <th>中角(右)の座標</th>
                                <td>[{middleRightCoords.map((x => x.toFixed(2))).join(", ")}]</td>
                            </tr>
                            <tr>
                                <th>底角(左)の座標</th>
                                <td>[{bottomLeftCoords.map((x => x.toFixed(2))).join(", ")}]</td>
                            </tr>
                            <tr>
                                <th>底角(右)の座標</th>
                                <td>[{bottomRightCoords.map((x => x.toFixed(2))).join(", ")}]</td>
                            </tr>
                            </tbody>
                        </table>

                        <div className="block">
                            <div className="columns">
                                <div className="column has-text-centered">
                                    <DownloadImageButton topCoords={topCoords} middleLeftCoords={middleLeftCoords}
                                                         middleRightCoords={middleRightCoords}
                                                         bottomLeftCoords={bottomLeftCoords}
                                                         bottomRightCoords={bottomRightCoords} pieceColor={pieceColor}/>
                                </div>
                                <div className="column has-text-centered">
                                    {/*<button className="button">Download Info</button>*/}
                                    <DownloadInfoButton aspectRatio={aspectRatio} topDegree={topDegree}
                                                        bottomDegree={bottomDegree} topCoords={topCoords}
                                                        middleLeftCoords={middleLeftCoords}
                                                        middleRightCoords={middleRightCoords}
                                                        bottomLeftCoords={bottomLeftCoords}
                                                        bottomRightCoords={bottomRightCoords} pieceColor={pieceColor}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <HelpModal/>
    </div>
}

export default App;