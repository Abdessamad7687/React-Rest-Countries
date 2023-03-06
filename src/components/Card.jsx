import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

const Card = ({ cname, capital, image, region, population }) => {
    return (
        <div class="card bg-light mb-3 w-25 p-2 m-2 mx-auto">
            <img class="card-img-top" src={image} alt="Country Logo" />
            <div class="card-body">
                <h5 class="card-title">
                    <strong>Population: </strong> {population}
                </h5>
                <p class="card-text">
                    <strong>Capital of {cname}: </strong>
                     {capital}
                </p>
                <p class="card-text">
                    <strong>Region: </strong>
                     {region}
                </p>
            </div>
            <div class="card-footer">
                <small class="text-muted"></small>
            </div>
        </div>
    )
}

export default Card