import React from 'react'
import PlantDetail from './PlantDetail'

const Plants = () => {
  return (
    <>
      {/* PLACEHOLDER 1 */}
      <div className="main-container">
        <div className="plant-container">
          <img src='https://post.healthline.com/wp-content/uploads/2020/05/435791-Forget-You-Have-Plants-11-Types-That-Will-Forgive-You_Thumnail.jpg'/>
          <div className="plant-container-heading">
            <p className="plant-name">Venus Flytrap</p>
            <p className="plant-category">Carnivorous</p>
          </div>
          <hr />
          <div className="plant-container-body">
            <p className="plant-date">10th Sep</p>
            <p className="plate-location">Newtown</p>
          </div>
          <a href='./PlantDetail' className="plant-container-button">
              Check it out
          </a>
        </div>

        {/* PLACEHOLDER 2 */}
        <div className="plant-container">
          <img src="https://resources.stuff.co.nz/content/dam/images/1/v/q/y/i/b/image.related.StuffLandscapeSixteenByNine.710x400.1vproa.png/1562787435547.jpg?format=pjpg&optimize=medium"/>
          <div className="plant-container-heading">
            <p className="plant-name">Sunflower</p>
            <p className="plant-category">Large Pot Plant</p>
          </div>
          <hr />
          <div className="plant-container-body">
            <p className="plant-date">9th Sep</p>
            <p className="plate-location">Miramar</p>
          </div>
          <a href="" className="plant-container-button">
              Check it out
          </a>
        </div>

        {/* PLACEHOLDER 3 */}
        <div className="plant-container">
          <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/houseplants-asplenium-nidus-peperomia-and-fittonia-royalty-free-image-946085220-1557179507.jpg?crop=1.00xw:0.335xh;0,0.638xh&resize=1200:*"/>
          <div className="plant-container-heading">
            <p className="plant-name">Aloe Vera</p>
            <p className="plant-category">Succulent</p>
          </div>
          <hr />
          <div className="plant-container-body">
            <p className="plant-date">10th Sep</p>
            <p className="plate-location">Brooklyn</p>
          </div>
          <a href="" className="plant-container-button">
              Check it out
          </a>
        </div>

        {/* PLACEHOLDER 4 */}
        <div className="plant-container">
          <img src="https://media.allure.com/photos/5fdcf516563e46c7d11ee93f/3:2/w_2118,h_1412,c_limit/AllureBeginnerHouseplants.jpg"/>
          <div className="plant-container-heading">
            <p className="plant-name">Silver Fern</p>
            <p className="plant-category">Ferns</p>
          </div>
          <hr />
          <div className="plant-container-body">
            <p className="plant-date">8th Sep</p>
            <p className="plate-location">Te Aro</p>
          </div>
          <a href="" className="plant-container-button">
              Check it out
          </a>
        </div>

        {/* PLACEHOLDER 5 */}
        <div className="plant-container">
          <img src="https://cdn.rotoruaflorist.co.nz/wp-content/uploads/rotorua-florist-flowers-Baby-house-plant-in-cute-pot.jpg"/>
          <div className="plant-container-heading">
            <p className="plant-name">Tomato Plant</p>
            <p className="plant-category">Vegetable</p>
          </div>
          <hr />
          <div className="plant-container-body">
            <p className="plant-date">30th Aug</p>
            <p className="plate-location">Lyall Bay</p>
          </div>
          <a href="" className="plant-container-button">
              Check it out
          </a>
        </div>
      </div>
    </>
  )
}

export default Plants
