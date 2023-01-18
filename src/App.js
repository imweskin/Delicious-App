import Pages from "./pages/Pages";
import Category from "./components/Category";
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Search from "./components/Search";
import styled from "styled-components";
import {GiKnifeFork} from 'react-icons/gi';

function App() {
  return (
    <div className="App">
        <Router>
            <Scontainer>
                <Nav>
                    <GiKnifeFork />
                    <Logo to={"/"}>delicious</Logo>
                </Nav>
            </Scontainer>

            <Scontainer>
                <Search />
            </Scontainer>

            <Scontainer>
                <Category />
            </Scontainer>
            
            <Scontainer>
                <Pages />
            </Scontainer>
            
        </Router>
    </div>
  );
}   

const Logo = styled(Link)`
    text-decoration: none;
    font-size: 22px;
    font-weight: 400;
    font-family: 'Lobster Two', cursive;
`;

const Nav = styled.div`
    padding: 30px 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    svg {
        font-size: 30px;
    }
`;

const Scontainer = styled.div`
    padding: 0 15px;
    margin: 0 auto;

    @media (min-wdith: 768px) {
        width: 750px;
    }
    @media (min-width: 992px) {
        width: 970px;
    }
    @media (min-width: 1200px) {
        width: 1170px;
    }
`;

export default App;