import React from "react";

function HelpModal(props){
    const modalActivate = (() => {
        let dom = document.querySelector("#help-modal")
        dom.classList.add("is-active")
    })

    const modalDeactivate = (() => {
        let dom = document.querySelector("#help-modal")
        dom.classList.remove("is-active")
    })

    return <div>
        <div className="icon-text subtitle is-5 block-a" onClick={modalActivate}>
            <i className="far fa-question-circle icon-a"/>
        </div>
        <div className="modal" id="help-modal">
            <div className="modal-background" onClick={modalDeactivate}/>
            <div className="modal-content">
                <div className="notification">
                    <p className="subtitle is-3">How to use</p>
                    <p className="subtitle is-5">Step 1</p>
                    <p className="subtitle is-6">スライドバーを動かして好みの形を作成します。</p>
                    <p className="subtitle is-5">Step 2</p>
                    <p className="subtitle is-6">Colorボタンをクリックして、好みの色を設定します。</p>
                    <p className="subtitle is-5">Step 3</p>
                    <p className="subtitle is-6">「Download Image」ボタンで画像をダウンロードできます。</p>
                    <p className="subtitle is-6">「Download Info」ボタンで座標情報のJsonをダウンロードできます。</p>
                </div>
            </div>
            <button className="modal-close is-large" aria-label="close" onClick={modalDeactivate}/>
        </div>
    </div>
}

export default HelpModal;