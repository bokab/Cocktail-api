import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import Loading from '../compoments/Loading';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

function SingleCoctail() {

    const { id } = useParams();

    const [loading, setLoading] = useState(false);
    const [cocktail, setCocktails] = useState(null);


    React.useEffect(() => {
        setLoading(true);

        async function getData() {
            try {
                const response = await fetch(`${url}${id}`);
                const data = await response.json();
                console.log(data);
                if (data.drinks) {
                    const {
                        strDrink: name,
                        strCategory: category,
                        strGlass: glass,
                        strInstructions: instructions,
                        strAlcoholic: info,
                        strDrinkThumb: image,
                    } = data.drinks[0];

                    const newCocktail = {
                        name, image, info, category, glass, instructions
                    }
                    setCocktails(newCocktail);
                } else {
                    setCocktails(null);
                }
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        getData();
    }, [id])


    if (loading) {
        return <Loading />;
    }

    if (!cocktail) {
        return <h2 className='section-title'>
            no cocktail to display
        </h2>
    }

    const { name, info, image, category, glass, instructions } = cocktail;


    return (
        <section className='section cocktail-section'>
            <Link to='/' className='btn btn-primary'>back home</Link>
            <h2 className='section-title'>{name}</h2>
            <div className='drink'>
                <img src={image} alt={image} />
                <div className='drink-info'>
                    <p>
                        <span clasName='drink-info'>
                            name:
                        </span> {name}
                    </p>
                    <p>
                        <span clasName='drink-info'>
                            category:
                        </span> {category}
                    </p>
                    <p>
                        <span clasName='drink-info'>
                            info:
                        </span> {info}
                    </p>
                    <p>
                        <span clasName='drink-info'>
                            glass:
                        </span> {glass}
                    </p>
                    <p>
                        <span clasName='drink-info'>
                            instruction:
                        </span> {instructions}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default SingleCoctail