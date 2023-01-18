import {useEffect, useState} from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

function Recipe() {

    const [details, setDetails] = useState({});  
    const [activeTab, setActiveTab] = useState("instructions");

    let params = useParams();

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const detailData = await data.json();
        setDetails(detailData);
    };

    useEffect(() => {
        fetchDetails();
    }, [params.id]);

    return (    
        <DetailWrapper>
            <ImageDiv>
                <h2>{details.title}</h2>
                <img src={details.image} alt={details.title} />
            </ImageDiv>
            <Info>
                <Button className={activeTab === "instructions" ? 'active' : ''} onClick={() => setActiveTab("instructions")}>Instructions</Button>
                <Button className={activeTab === "ingredients" ? 'active' : ''} onClick={() => setActiveTab("ingredients")}>Ingredients</Button>
                {activeTab === 'instructions' && (
                    <div>
                        <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
                        {details.instructions && <h3>Instructions : </h3>}
                        <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
                    </div>
                )}
                {activeTab === 'ingredients' && (
                    <ul>
                        {details.extendedIngredients.map((ingredient) => (
                            <li key={ingredient.id}>{ingredient.original}</li>
                        ))}
                    </ul>
                )}
            </Info>
        </DetailWrapper>
    )
}

const DetailWrapper = styled.div`
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .active {
        background: linear-gradient(35deg, #494949, #313131);
        color: #fff;
    }
    h3 {
        font-size: 17px;
        line-height: 1.7;
        color: #333;
        font-weight: 500;
    }
    h2 {
        margin-bottom: 2rem;
    }
    li {
        font-size: 17px;
        line-height: 1.6;
        color: #333;
        font-weight: 500;
        margin-top: 8px;
    }
    ul, ol {
        list-style: none;
    }
    ul {
        margin-top: 4rem;
    }
    @media (max-width: 991px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 0;
        margin-bottom: 0;
        ol {
            margin-left: 20px;
        }
        img {
            max-width: 100%;
            width: 400px;
        }
        h2 {
            font-size: 20px;
        }
        h3 {
            font-size: 16px;
            line-height: 1.7;
            text-align: left;
        }
    }
`;

const ImageDiv = styled.div`
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;


const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background-color: #fff;
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 600;
    cursor: pointer;
    @media (max-width: 767px) {
        margin-right: 10px;
    }
`;

const Info = styled.div`
    text-align: center;
    margin: 40px auto;
    @media (max-width: 991px) {
        margin: 40px auto;
        text-align: center;
    }
`;

export default Recipe