import React from 'react'
import { Link } from 'react-router-dom';

function Cocktail({ image, info, name, id, glass, category, instructions }) {
    return (
        <article className='cocktails'>
            <div className='img-container'>
                <img src={image} alt={name} />
            </div>
            <div className='cocktail-footer'>
                <h3>{name}</h3>
                <h4>{glass}</h4>
                <h4>{category}</h4>
                <h4>{instructions}</h4>
                <p>{info}</p>
                <Link to={`/cocktail/${id}`} className='btn btn-primary btn-details'>
                    details
                </Link>
            </div>
        </article>
    )
}

export default Cocktail;