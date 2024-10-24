import React from 'react';
import styled from "styled-components";

import headerImage from '../images/header-profile.png'

const ContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #7130D5;
    height: 94px;
    width: 100%;
    padding: 20px;
    position: fixed;
    top: 0;
`

const Content = styled.div`
    display: flex;
    flex-direction: row;
`

const Text1 = styled.div`
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    color: #FCFCFC;
`;

const Text2 = styled.div`
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    color: #FCFCFC;
`;

const Header = () => (
    <ContainerDiv>
        <Content>
            <img
                src={headerImage}
                width={46}
                height={46}
                style={{marginRight: 5}}
                alt="loading..."
            />
            <div>
                <Text1>Welcome to e-commerce!</Text1>
                <Text2>Good morning, Nicole!</Text2>
            </div>
        </Content>
    </ContainerDiv>
)

export default Header;


