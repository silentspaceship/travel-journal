import React from "react";

import IconPin from "../assets/location-pin.svg";

import "./Post.css";

export function Post() {
  return (
    <article className="post-container">
      <div className="post-picture-container">
        <img
          className="post-picture"
          src="https://images.unsplash.com/photo-1578637387939-43c525550085"
          alt="Mount Fuji"
        />
      </div>

      <div className="post-details">
        <section className="location">
          <div className="country-container">
            <img className="icon-pin" src={IconPin} alt="Location Pin"></img>
            <p className="country">Japan</p>
          </div>
          <a href="/">View on Google Maps</a>
        </section>

        <h1>Mount Fuji</h1>

        <section className="period">
          <p>
            <time dateTime="2021-01-12">12 Jan, 2021</time> -{" "}
            <time>24 Jan, 2021</time>
          </p>
        </section>
        <p className="description">
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </p>
      </div>
    </article>
  );
}
