import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopsticks} from 'react-icons/gi';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

function Category() {
  return (
    <List>
        {/* PS : NavLink has been changed to SLink for the styling */}
        <SLink to={"/cuisine/Italian"}>
            <FaPizzaSlice />
            <h4>Italian</h4>
        </SLink>

        <SLink to={"/cuisine/American"}>
            <FaHamburger />
            <h4>American</h4>
        </SLink>

        <SLink to={"/cuisine/Thai"}>
            <GiNoodles />
            <h4>Thai</h4>
        </SLink>

        <SLink to={"/cuisine/Chinese"}>
            <GiChopsticks />
            <h4>Chinese</h4>
        </SLink>
    </List>
  );
};

const List = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 50%;
    margin: 2rem auto;
    @media (max-width: 767px) {
        width: 100%;
    }
`;

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 90px;
    height: 90px;
    cursor: pointer;
    transform: scale(0.8);

    h4 {
        color: #fff;
        font-size: 0.8rem;
    }
    svg {
        color: #fff;
        font-size: 25px;
    }
    &.active {
        background: linear-gradient(to right, #f27121, #e94057);

        svg {
            color: #fff;
        }
        h4 {
            color: #fff;
        }
    }
`;

export default Category;