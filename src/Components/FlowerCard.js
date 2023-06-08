import React from "react";

function FlowerCard(flower) {
  return (
    <div class="card">
      <img class="card-img-top" src={flower.image} alt={flower.alt} />
      <div class="card-body">
        <h5 class="card-title">{flower.name}</h5>
        <p class="card-text">${flower.price}</p>
        <a href="google.com" class="card-text">
          {flower.tags}
        </a>
      </div>
    </div>
  );
}

export default FlowerCard;
