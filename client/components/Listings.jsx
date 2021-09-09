import React from "react"

import ListingItem from './ListingItem'


function Listings (props) {

    return (
        <div>
            {props.plants.map(plant => {
                return (
                <ListingItem plant={plant} />

                )
            })}
        </div>
    )
    }

    export default Listings
