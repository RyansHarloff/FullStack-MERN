import React, { useEffect, useState } from 'react';
import axios from 'axios';

const One = props => {
    const [oneItem, setOneItem] = useState(null);
    useEffect(() => {
        axios.get(`http://localhost:8000/api/item/${props._id}`)
            .then(res => setOneItem(res.data))
            .catch(err => console.log(err))
    }, [props])
    return(
        <>
            {
                oneItem ? <>
                <h1 className = " display-2 p-3 mb-2 bg-dark text-white">{oneItem.name}</h1>
                <br/>
                <br/>
                <div className = "row">
                    <div className = "col-4">
                        <img style={{width: "20rem"}} src={oneItem.picture} alt={oneItem.name} />
                    </div>
                    <div className ="col-8">
                        <h1>Animal: {oneItem.animal}</h1>
                        <br/>
                        <h1>Height: {oneItem.height}</h1>
                        <h5 className = "text-danger">Height is in CM</h5>
                        <br/>
                        <h1>Number of Bowls: {oneItem.design}</h1>
                        <br/>
                        <h1>Color of Wood: {oneItem.color}</h1>
                        <br/>
                        <h1>${oneItem.price}</h1>
                    </div>
                </div>
                </> : ""
            }
        </>
    );
}

export default One;