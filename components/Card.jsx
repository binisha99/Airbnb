import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <article>
        <img src={`../images/${props.img}`} className="card_image" />
      </article>
      <section>
        <div className="card--stats">
          <img src={props.img2} />
          <span>{props.rating}</span>
          <span className="grey">{props.rate}</span>
          <span className="grey">{props.country}</span>
        </div>
        <p>{props.quote}</p>
        <p>
          <span className="bold">{props.bold}</span>
          {props.person}
        </p>
      </section>
    </div>
  );
}
