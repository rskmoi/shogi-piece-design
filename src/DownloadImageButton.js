import React from "react";
import posthog from "posthog-js";

function DownloadImageButton(props){
    const downloadImage = (() => {
        posthog.capture('DownloadImage', { property: 'value' })
        const canvas = document.createElement('canvas')
        const marginx = 200;
        const marginy = 50;

        canvas.width = 400;
        canvas.height = props.bottomLeftCoords[1] + marginy + marginy;
        const ctx = canvas.getContext('2d')
        ctx.fillStyle = "rgba(255, 255, 255, 0)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.moveTo(props.topCoords[0] + marginx, props.topCoords[1] + marginy);
        ctx.lineTo(props.middleLeftCoords[0] + marginx, props.middleLeftCoords[1] + marginy);
        ctx.lineTo(props.bottomLeftCoords[0] + marginx, props.bottomLeftCoords[1] + marginy);
        ctx.lineTo(props.bottomRightCoords[0] + marginx, props.bottomRightCoords[1] + marginy);
        ctx.lineTo(props.middleRightCoords[0] + marginx, props.middleRightCoords[1] + marginy);
        ctx.moveTo(props.topCoords[0] + marginx, props.topCoords[1] + marginy);
        ctx.fillStyle = props.pieceColor;
        ctx.fill();
        let link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "ShogiPiece.png";
        link.click();
    })

    return <div>
        <button className="button" onClick={downloadImage}>Download Image</button>
    </div>
}

export default DownloadImageButton;