import React from 'react'
import CocktailList from '../compoments/CocktailList'
import Footer from '../compoments/Footer'
import SearchForm from '../compoments/SearchForm'

function Home() {
    return (
        <main>
            <SearchForm />
            <CocktailList />
            <Footer />
        </main>
    )
}

export default Home