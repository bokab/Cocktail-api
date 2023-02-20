import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
    return (
        <div className='error-page section'>
            <div className='error-container'>
                <h1>Ooops! Wrong Page.</h1>
                <Link to='/home' className='btn btn-primary'>Home</Link>
            </div>
        </div>
    )
}

export default Error