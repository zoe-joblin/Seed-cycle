import React, { useEffect } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { fetchPlants } from "../actions/actions";


function Listings () {

  const plants = useSelector((state) => state.plants)
  console.log(plants)
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPlants());
  }, []);

    return (
        <div>
            {plants.map(plant => {
              console.log(plant)
                return (
                <ListingItem plant={plant} />

                )
            })}
        </div>
    )
    }


    export default connect()(Listings)
