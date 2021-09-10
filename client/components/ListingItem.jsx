import React from "react";
import { Link } from "react-router-dom";

const ListingItem = (props) => {
  const { plant_id, listing_title, category, suburb, image_data } = props.plant;

  return (
    <div className="plant-container">
      <img src={image_data} />
      <div className="plant-container-heading">
        <p className="plant-name">{listing_title}</p>
        <p className="plant-category">{category}</p>
      </div>
      <hr />
      <div className="plant-container-body">
        <p className="plant-date">10th Sep</p>
        <p className="plate-location">{suburb}</p>
      </div>
      <Link to={"/" + plant_id} className="plant-container-button">
        Check it out
      </Link>
    </div>
  );
};

export default ListingItem;
