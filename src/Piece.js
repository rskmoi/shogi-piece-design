import React, {useEffect} from "react";

function Piece(props){
    useEffect(() => {
        const canvas = document.getElementById("canvas")
        const ctx = canvas.getContext('2d')
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const marginX = 200;
        const marginY = 50;

        canvas.width = 400;
        canvas.height = props.bottomLeftCoords[1] + marginY + marginY;
        ctx.fillStyle = "#FFFFD1";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.moveTo(props.topCoords[0] + marginX, props.topCoords[1] + marginY);
        ctx.lineTo(props.middleLeftCoords[0] + marginX, props.middleLeftCoords[1] + marginY);
        ctx.lineTo(props.bottomLeftCoords[0] + marginX, props.bottomLeftCoords[1] + marginY);
        ctx.lineTo(props.bottomRightCoords[0] + marginX, props.bottomRightCoords[1] + marginY);
        ctx.lineTo(props.middleRightCoords[0] + marginX, props.middleRightCoords[1] + marginY);
        ctx.moveTo(props.topCoords[0] + marginX, props.topCoords[1] + marginY);
        ctx.fillStyle = props.pieceColor;
        ctx.fill();
    })

    return <div>
        <canvas width="400" height="550" id="canvas"/>
    </div>
}

export default Piece;