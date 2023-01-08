import React from "react";

export default function Card(props) {
  console.log(props)
  return (
    <div className="card">
      <img src={props.imageUrl} className="card--img"></img>
      <div className="card--info">
        <div className="card--location">
          <img src="./images/gps.svg" className="card--location-img"></img>
          <h5 className="card--location-country">{props.location.toUpperCase()}</h5>
          <a href={props.googleMapsUrl} className="card--location-url">View on Google Maps</a>
        </div>
        <h1 className="card--title">{props.title}</h1>
        <h6 className="card--date">{props.startDate} - {props.endDate}</h6>
        <p className="card--text">{props.description}</p>
      </div>
    </div>
  )
}
