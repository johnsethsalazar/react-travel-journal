import React from "react";
import {HiMapPin} from "react-icons/hi2"

export default function Cards(props){
    return(
        <div className="cards">
            
            <img src={`${props.image}`} className="image" />
            <div className="card--stats">
                <HiMapPin />
                <span className="country--name">{props.country}</span>
                <span><a> View on Google Maps</a></span>
                <h2 className="date">{props.date}</h2>
                <p className="description">{props.description}</p>
            </div>
        </div>
    )
}