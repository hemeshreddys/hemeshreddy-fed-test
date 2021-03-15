import React from "react";
import * as style from "./style.js";

const CardItem = (props) => {
    return (
        <style.Card>
            <img src={props.imgurl} />
            <div className="users">
            <h2>{props.name}</h2>
            <p>{props.email}</p>
            <p>{props.location}</p>
            </div>
        </style.Card>
    )
}

export default CardItem;

