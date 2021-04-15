import React, {Component} from "react";

class Rect extends Component{
    x = 0;
    y = 0;
    w = 0;
    h = 0;
    c = "white";
    style = {};

    constructor(props) {
        super(props);
        this.style = {
            backgroundColor: props.c,
            position: "absolute",
            left: props.x + "px",
            top: props.y + "px",
            width: props.w + "px",
            height: props.h + "px",
            borderRadius: props.r + "px"
        };
    };

    render() {
        return <div style={this.style}/>
    }
}

export default Rect;