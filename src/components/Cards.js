import React from "react";
import {HiMapPin} from "react-icons/hi2"

export default function Cards(props){
    return(
        <div className="cards p-3 mx-auto d-flex justify-content-center">
            <div className="card mb-3 col-9 col-md-6 shadow-lg" style={{maxWidth: '540px'}}>
                <div className="row g-0">
                    <div className="col-md-4 d-flex justify-content-center">
                        <img src={`${props.image}`} className="img-fluid rounded-start rounded-end" style={{padding: '10px'}}/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body p-4">
                    <div className="d-flex align-items-center">
                        <HiMapPin />
                        <div className="d-md-inline-block"><span className="card-title">{props.country}</span></div>
                    </div>
                        <div className="d-md-inline-block"><span><a className="text-decoration-none" href={`${props.maps}`} target="_blank" rel="noopener noreferrer"> View on Google Maps</a></span></div>
                        <p className="card-date">{props.date}</p>
                        <p className="card-date">{props.description}</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>

        
    )
}