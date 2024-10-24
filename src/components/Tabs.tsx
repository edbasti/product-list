import React, { ReactElement, useState } from "react"
import styled from "styled-components";

import TabTitle from "./TabTitle"
import homeIcon from "../images/home.png";
import couponIcon from "../images/coupon.png";
import meIcon from "../images/me.png";

type Props = {
  children: ReactElement[]
}

const TabsContainer = styled.div`
  height: 94px;
  border-top: .5px solid #CACACA;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.04);
  align-items: center;
  width: 100%;
  position: fixed;
  bottom: 0;
  overflow: hidden;
  background-color: #FFF;
`

const Tabs: React.FC<Props> = ({ children }) => {
    const [selectedTab, setSelectedTab] = useState(0)
    const arrIcons = [homeIcon, couponIcon, meIcon];
    
  return (
    <div>
      {children[selectedTab]}
      <TabsContainer>
        {children.map((item, index) => (
          <TabTitle
          key={index}
          icon={arrIcons[index]}
          title={item.props.title}
          index={index}
          setSelectedTab={setSelectedTab}
        />
        ))}
      </TabsContainer>

    </div>
  )
}

export default Tabs