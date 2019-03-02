import React from 'react';
import { Link } from 'react-router-dom';

export default function Product(props) {

    const display = props.product.map((element, id) => {
        return (
            <div key={id} className="box">
                <br />
                {element.name}
                <br />
                <img src={element.image} alt='no dice'></img>
                <br />
                ${element.price}
                <br />
                <div className="columns">
                    <div className="column">
                        <button onClick={(e) => props.delete(element.id)} className="button is-danger">Remove</button>
                    </div>
                    <div className="column">
                        <Link to={`/edit/${element.id}`}>
                            <button className="button is-warning">Edit</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    })

    return (

        <div>
            { display }
        </div>
    )

}