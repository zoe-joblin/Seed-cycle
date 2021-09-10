import React from 'react'





const ListingItem = (props) => {

  // console.log(props)
  const { listing_title, category, suburb, image_data } = props.plant

  console.log(props.plant)

  
  return (
    <>
      <div className="main-container">
        <div className="plant-container">
          <img src={image_data}/>
          <div className="plant-container-heading">
            <p className="plant-name">{listing_title}</p>
            <p className="plant-category">{category}</p>
          </div>
          <hr />
          <div className="plant-container-body">
            <p className="plant-date">10th Sep</p>
            <p className="plate-location">{suburb}</p>
          </div>
          <a href="" className="plant-container-button">
              Check it out
          </a>
        </div>
        </div>
      </>
      
        )
        }

        
export default ListingItem
