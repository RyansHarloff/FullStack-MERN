import React from 'react';
import { Link } from '@reach/router';

const Card = props => {
    const {item} = props;
    return(
        <>
            <div className ="card" style = {{width: "18rem", display: "inline-block"}}>
                <img style={{width: "18rem"}} src = {item.picture} alt = {item.name}/>
                <h4>{item.name}</h4>
                <div className = "card-body">
                    <h4>{item.animal}</h4>
                    <h4>{item.color}</h4>
                    <h4>${item.price}</h4>
                    <Link to ={`/item/${item._id}`}><button className ="btn btn-primary">Description</button></Link> <button className = "btn btn-success">Buy</button>
                </div>
            </div>
        </>
    )
}

export default Card;