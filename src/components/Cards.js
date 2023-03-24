import React from "react";
import {HiMapPin} from "react-icons/hi2"

export default function Cards(props){
    return(
        <div className="cards p-3 mx-auto d-flex justify-content-center">
            <div className="card mb-3" style={{maxWidth: '540px'}}>
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={`${props.image}`} className="img-fluid rounded-start" />
                    </div>
                    <div className="col-md-8">
                    <div className="card-body p-4">
                        <HiMapPin />
                        <span className="card-title">{props.country}</span>
                        <span><a> View on Google Maps</a></span>
                        <p className="card-date">{props.date}</p>
                        <p className="card-date">{props.description}</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>

        
    )
}