import React from 'react'

const AddPlant = () => {
  return (
    <>
        <div className="add-container">
            <div className="add-pic">
                <div className="add-pic-container">
                    <p>Add a Photo</p>
                    <p><input type="file" id="picture" name="picture" accept="image/png, image/jpeg" /></p>
                </div>
            </div>

            <div className="detail-container-text">
                <form action="">
                    <div className="detail-container-heading">
                        <label className="plant-name" for="plantname">Plant Name: </label><br/>
                        <input type="text" id="plantname" name="plantname" placeholder="Sunflower"/><br/>

                        <label for="category">Choose a Category:</label><br/>
                        <select name="category" id="category">
                            <option value="" selected disabled hidden>Choose here!</option>
                            <option value="large-pot-plants">Large Pot Plants</option>
                            <option value="hanging-pot-plants">Hanging Pot Plants</option>
                            <option value="ferns">Ferns</option>
                            <option value="succculent">Succculent</option>
                            <option value="carnivorous">Carnivorous</option>
                            <option value="etc">Etc etc</option>
                        </select>
                        <br/>
                    </div>
                    <hr />
                    <div>
                        <label for="location">Location: </label><br/>
                        <input type="text" id="location" name="location" placeholder="Newtown"/><br/>
                    </div>
                    <hr />
                    <div>
                        <label for="fname">First Name: </label><br/>
                        <input type="text" id="fname" name="fname" placeholder="Alex"/><br/>

                        <label for="phone">Phone: </label><br/>
                        <input type="text" id="phone" name="phone" placeholder="027 123 4567"/><br/>

                        <label for="email">Email: </label><br/>
                        <input type="text" id="email" name="email" placeholder="alex@gmail.com"/><br/>

                        <input class="submit" type="submit" value="Submit"/>
                    </div>
                </form> 
            </div>
        </div>            
    </>
  )
}

export default AddPlant