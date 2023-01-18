import styled from 'styled-components';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Search() {

    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/searched/${input}`);
    };

    return (
        <FormStyle onSubmit={submitHandler}>
            <div>
                <FaSearch />
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
            </div>
        </FormStyle>
    )
}

const FormStyle = styled.form`
    width: 50%;
    margin: 0 auto;

    div {
        position: relative;
        width: 100%;
    }
    input {
        border: none;
        outline: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 16px;
        color: #fff;
        padding: 1rem 3rem;
        border-radius: 1rem;
        width: 100%;
    }
    svg {
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: #fff;
    }
    @media (max-width: 767px) {
        width: 100%;
    }
`;

export default Search