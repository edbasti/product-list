import styled from "styled-components";
import Header from './Header';
import Menu from './Menu';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
const Home = () => {

    return (
    <MainContainer>
        <Header />
        <Menu />
    </MainContainer>
)}

export default Home;