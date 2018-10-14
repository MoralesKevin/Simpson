// src/Quote.js
import React from "react";

const Quote = ({ habitants }) => {
  return(
    <figure>
      <h3>{habitants.quote}</h3>
      <img src={habitants.image} alt={habitants.character}/>
      <h2>{habitants.character}</h2>
    </figure>
  );
};
export default Quote;