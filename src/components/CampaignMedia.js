import React from "react";
import HorizontalScroll from 'react-scroll-horizontal'

function CampaignMedia(campaign) {
 
  // console.log(medias.medias);
  // console.log(campaign);
  return(
    <div className="scroll-div">
      <HorizontalScroll>
            {console.log(campaign.campaign.medias)}
            {campaign.campaign.medias.map((element) => {
              return (<div style={{backgroundImage: `url(${element.cover_photo_url})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain'}} className="main-scroll">{element.media_type}</div>)
            })}
            
        
      </HorizontalScroll>
    </div>
  )
  
}

export default CampaignMedia;