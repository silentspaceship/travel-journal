import React from "react";

import "./Post.css";

import IconPin from "../assets/location-pin.svg";

export function Post(props) {
  return (
    <article className="post-container">
      <div className="post-picture-container">
        <img
          className="post-picture"
          src={props.item.image}
          alt={props.item.location.place}
        />
      </div>

      <div className="post-details">
        <section className="location">
          <div className="country-container">
            <img className="icon-pin" src={IconPin} alt="Location Pin"></img>
            <p className="country">{props.item.location.country}</p>
          </div>
          <a href={props.item.location.mapsLink}>View on Google Maps</a>
        </section>

        <h1>{props.item.location.place}</h1>

        <section className="period">
          <p>
            <time dateTime={props.item.period.startDate}>
              {new Date(props.item.period.startDate).toDateString().slice(4)}
            </time>{" "}
            -{" "}
            <time dateTime={props.item.period.endDate}>
              {new Date(props.item.period.endDate).toDateString().slice(4)}
            </time>
          </p>
        </section>
        <p className="description">{props.item.description}</p>
      </div>
    </article>
  );
}
