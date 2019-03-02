import React from 'react';
import { Link } from 'react-router-dom';

export default function Product(props) {

    const display = props.product.map((element, id) => {
        return (
            <div key={id}>
                <br />
                {element.name}
                <br />
                <img src={element.image} alt='no dice'></img>
                <br />
                {element.price}
                <br />
                <button onClick={(e) => props.delete(element.id)}>Remove</button>
                <Link to={`/edit/${element.id}`}><button>Edit</button></Link>
            </div>
        )
    })

    return (

        <div>
            <h1>Product</h1>
            { display }
        </div>
    )

}