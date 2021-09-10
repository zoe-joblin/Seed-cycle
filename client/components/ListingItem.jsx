import React from 'react'


const ListingItem = (props) => {

  const { listing_title, category, suburb } = props.plants

  
  return (
    <>
      <div className="main-container">
        <div className="plant-container">
          <img src='https://post.healthline.com/wp-content/uploads/2020/05/435791-Forget-You-Have-Plants-11-Types-That-Will-Forgive-You_Thumnail.jpg'/>
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
