import styled from "styled-components";

import ProductList from './ProductList';
import Tabs from './Tabs';
import Tab from './Tab';

const MessageContainer = styled.div`
    margin: 140px 20px;
`
const Menu = () => {

    return (
        <Tabs>
            <Tab title="Home"><ProductList /></Tab>
            <Tab title="My Coupons"><MessageContainer><h1>Coming Soon.</h1></MessageContainer></Tab>
            <Tab title="Me"><MessageContainer><h1>Coming Soon.</h1></MessageContainer></Tab>
        </Tabs>
)}

export default Menu;