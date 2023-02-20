import React from 'react'
import { useGlobalContext } from '../context'

function SearchForm() {

    const { setSearchTerm } = useGlobalContext();

    // useRef-> Ref 
    const searchValue = React.useRef('')



    React.useEffect(() => {
        searchValue.current.focus();
    })


    const searchHandle = () => {
        setSearchTerm(searchValue.current.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <section className='section search'>
            <form className='search-form' onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='name'>
                        search your cocktail
                    </label>
                    <input type="text" id="name" ref={searchValue} placeholder="Enter the name of cocktail" onChange={searchHandle} />
                </div>
            </form>
        </section>

    )
}

export default SearchForm