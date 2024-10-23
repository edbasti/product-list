import React from "react";
import styled from "styled-components";

type Props = {
  title: string
  index: number
  icon: string
  setSelectedTab: (index: number) => void
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TabTitle: React.FC<Props> = ({ icon, title, setSelectedTab, index}) => {

  return (
    <Container>
      <img
        src={icon}
        width={24}
        height={24}
        onClick={() => setSelectedTab(index)}
        alt="loading..."
      />
      <span style={{color: '#7130D5'}}>{title}</span>
    </Container>
  )
}

export default TabTitle