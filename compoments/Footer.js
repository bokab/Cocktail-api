import React from 'react'

function Footer() {

    const year = new Date().getFullYear();
    return (
        <h1 className='year'>Copyright by Bojan Banovic @ {year} </h1>
    )
}

export default Footer