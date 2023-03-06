import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

const Card = ({ cname, capital, image }) => {
    return (
        <div class="card bg-light mb-3 w-25 m-2 mx-auto">
            <img class="card-img-top" src={image} alt="Card image cap" />
            <div class="card-body">
                <h5 class="card-title">{cname}</h5>
                <p class="card-text">{capital}</p>
            </div>
            <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
            </div>
        </div>
    )
}

export default Card