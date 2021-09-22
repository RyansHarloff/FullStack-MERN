import React from 'react';

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
                    <button className = "btn btn-primary">Product Description</button> <button className = "btn btn-success">Buy</button>
                </div>
            </div>
        </>
    )
}

export default Card;