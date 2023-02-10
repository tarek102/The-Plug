import React from "react";
import HorizontalScroll from 'react-scroll-horizontal'

function CampaignMedia() {
 
  return(
    <div className="scroll-div">
      <HorizontalScroll>
          <div className="main-scroll"><h1>hi</h1></div>
          <div className="main-scroll"><h1>hello</h1></div>
          <div className="main-scroll"><h1>hello</h1></div>
      </HorizontalScroll>
    </div>
  )
  
}

export default CampaignMedia;