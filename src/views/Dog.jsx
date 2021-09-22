import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import axios from 'axios';

const Dog = props => {
    const [allItems, setAllItems] = useState(null);
    useEffect(() => {
        axios.get("http://localhost:8000/api/item")
            .then(res => setAllItems(res.data))
            .catch(err => console.log("error", err))
    }, [])
    return(
        <>
            <h1>Dog Page</h1>
            {
                allItems ? allItems.map((item, i) => <Card key={i} item={item}/>) : ""
            }
        </>
    )
}

export default Dog;