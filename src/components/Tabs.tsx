import React, { ReactElement, useState } from "react"

import TabTitle from "./TabTitle"
import homeIcon from "../images/home.png";
import couponIcon from "../images/coupon.png";
import meIcon from "../images/me.png";

type Props = {
  children: ReactElement[]
}

const Tabs: React.FC<Props> = ({ children }) => {
    const [selectedTab, setSelectedTab] = useState(0)
    const arrIcons = [homeIcon, couponIcon, meIcon];
    
  return (
    <div>
      {children[selectedTab]}
      <div style={{padding: 15, marginTop: 10, borderTop: '1px solid #CACACA', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
        {children.map((item, index) => (
          <TabTitle
          key={index}
          icon={arrIcons[index]}
          title={item.props.title}
          index={index}
          setSelectedTab={setSelectedTab}
        />
        ))}
      </div>

    </div>
  )
}

export default Tabs