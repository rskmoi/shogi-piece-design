import React from "react";
import posthog from "posthog-js";

function DownloadInfoButton(props){
    const downloadImage = (() => {
        posthog.capture('DownloadInfo', { property: 'value' })
        const info = {
            "aspectRatio": props.aspectRatio,
            "topDegree": props.topDegree,
            "bottomDegree": props.bottomDegree,
            "topCoords": props.topCoords,
            "middleLeftCoords": props.middleLeftCoords,
            "middleRightCoords": props.middleRightCoords,
            "bottomLeftCoords": props.bottomLeftCoords,
            "bottomRightCoords": props.bottomRightCoords,
            "pieceColor": props.pieceColor,
        };
        const fileName = 'ShogiPieceInfo.json';
        const data = new Blob([JSON.stringify(info)], { type: 'text/json' });
        const jsonURL = window.URL.createObjectURL(data);
        const link = document.createElement('a');
        document.body.appendChild(link);
        link.href = jsonURL;
        link.setAttribute('download', fileName);
        link.click();
        document.body.removeChild(link);

    })

    return <div>
        <button className="button" onClick={downloadImage}>Download Info</button>
    </div>
}

export default DownloadInfoButton;