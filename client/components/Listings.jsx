import React, { useEffect } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { fetchPlants } from "../actions/actions";

import ListingItem from './ListingItem'


function Listings ( {dispatch}) {

  const plants = useSelector((state) => state.plants)

  
  // const dispatch = useDispatch();
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


    export default connect()(Listings)
