import React from "react";

export default function Hello(props) {
    if (props.name) {
        return <h1>Hello, {props.name} Baggins</h1>;
    } else {
        return <span>Hey, Baggins</span>;
    }
}