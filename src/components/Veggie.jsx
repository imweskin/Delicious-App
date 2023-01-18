import { useState, useEffect } from "react";
import styled from "styled-components";
import {Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import {Link} from 'react-router-dom';

function Veggie() {

    const [veggie, setVeggie] = useState([]);

    useEffect(() => {
        getVeggie();
    }, []);

    const getVeggie = async () => {

        const checkStorage = localStorage.getItem("veggie");
        
        if(checkStorage) {
            setVeggie(JSON.parse(checkStorage));
        }else {
            //link from spoonacular docs => search recipes
            //&number= put how many recipes you want here
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`);
            const data = await api.json();
            
            localStorage.setItem("veggie", JSON.stringify(data.recipes));
            setVeggie(data.recipes);
        }
    };

  return (
    <div>
        <Wrapper>
            <h3>Our Vegetarian Picks</h3>

            <Splide options={{
                perPage: 3,
                arrows: false,
                pagination: false,
                drag: 'free',
                gap: '40px',
                breakpoints: {
                    991: {
                        perPage: 2,
                        gap: '20px'
                    },
                    767: {
                        perPage: 1
                    }
                }
            }}>
                {veggie.map((recipe) => {
                    return (
                        <SplideSlide key={recipe.id}>
                            <Card>
                                <Link to={`/recipe/${recipe.id}`}>
                                    <p>{recipe.title}</p>
                                    <img src={recipe.image} alt={recipe.title} />
                                    <Gradient />
                                </Link>
                            </Card>
                        </SplideSlide>
                    );
                })}
            </Splide>
        </Wrapper>
    </div>
)
}

const Wrapper = styled.div`
    margin: 4rem 0;
`;

const Card = styled.div`
    height: 400px;
    border-radius: 30px;
    overflow: hidden;
    position: relative;

    img {
        border-radius: 30px;
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    p {
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 0;
        transform: translate(-50%, 0%);
        color: #fff;
        width: 100%;
        text-align: center;
        font-weight: 600;
        font-size: 15px;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    @media screen {
        height: 300px;
    }
`;

const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`;

export default Veggie;