import React from 'react'

const PlantDetail = () => {
  return (
    <>
        <div className="detail-container">
            <img src='https://post.healthline.com/wp-content/uploads/2020/05/435791-Forget-You-Have-Plants-11-Types-That-Will-Forgive-You_Thumnail.jpg'/>
            <div className="detail-container-text">
                <div className="detail-container-heading">
                    <p className="plant-name"><strong>Venus Flytrap</strong></p>
                    <p className="plant-category">Carnivorous</p>
                </div>
                <hr />
                <div className="">
                    <p className=""><strong>Date Posted: </strong>10th Sep</p>
                    <p className=""><strong>Location: </strong>Newtown</p>
                </div>
                <hr />
                <div className="">
                    <p className=""><strong>Name: </strong>Alex</p>
                    <p className=""><strong>Phone: </strong>027 123 4567</p>
                    <p className=""><strong>Email: </strong>alex@gmail.com</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default PlantDetail