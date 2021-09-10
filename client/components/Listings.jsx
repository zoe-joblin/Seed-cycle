import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlants } from "../actions/actions";

function Listings () {
  const plants = useSelector((state) => state.plants);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPlants());
  }, []);

    return (
        <div>
            {plants.map(plant => {
                return (
                <ListingItem plant={plant} />

                )
            })}
        </div>
    )
    }

    export default Listings
