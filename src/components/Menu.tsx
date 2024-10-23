import React from 'react';
import ProductList from './ProductList';
import Tabs from './Tabs';
import Tab from './Tab';

const Menu = () => {

    return (
        <Tabs>
            <Tab title="Home"><ProductList /></Tab>
            <Tab title="My Coupons">Coming Soon.</Tab>
            <Tab title="Me">Coming Soon.</Tab>
        </Tabs>
)}

export default Menu;