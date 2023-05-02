import React from "react";

export default function Card() {
  return (
    <div className="card">
      <article>
        <img src="./images/image 12.png" alt="katie" className="card_image" />
        <div className="card--stats">
        <img src="./images/Star 1.png" />
        <span>5.0</span>
        <span className="grey">(6).</span>
        <span className="grey">USA</span>
        </div>
        <p>
        Life lessons with Katie Zaferes
        </p>
        <p>
            <span className="bold">
            From $136
        </span>
         / person
        </p>
      </article>
      <article>
        <img
          src="./images/wedding-photography 1.png"
          alt="wedding photography"
          className="card_image"
        />
            <div className="card--stats">
        <img src="./images/Star 1.png" />
        <span>5.0</span>
        <span className="grey">(30).</span>
        <span className="grey">USA</span>
        </div>
        <p>
        Learn wedding photography
        </p>
        <p>
       <span className="bold">
       From $125
        </span>  / person
        </p>
      </article>
      <article>
        <img
          src="./images/mountain-bike 1.png"
          alt="mountain-bike"
          className="card_image"
        />
           <div className="card--stats">
        <img src="./images/Star 1.png" />
        <span>4.8</span>
        <span className="grey">(2).</span>
        <span className="grey">USA</span>
        </div>
        <p>
        Group Mountain Biking
        </p>
        <p>
            <span className="bold">
            From $50 
            </span>
       / person

        </p>
      </article>
    </div>
  );
}
