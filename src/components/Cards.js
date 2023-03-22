import React from "react";

export default function Cards(){
    return(
        <div className="cards">
            <img src="https://images.unsplash.com/photo-1578271887552-5ac3a72752bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80" className="image" />
            <div className="card--stats">
                <img src="" className="gps--logo" />
                <span className="country--name">JAPAN</span>
                <span><a> View on Google Maps</a></span>
                <h2 className="date">12 Jan, 2021 - 24 Jan, 2021</h2>
                <p className="description">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </div>
    )
}