import React from "react";

function CampaignInfo(campaign) {
  console.log(campaign.campaign);
  
  return(
    <div class="d-flex">
      <h2>{campaign.campaign.id}</h2>
      <h2>{campaign.campaign.campaign_name}</h2>
    </div>
    
  )
  
}

export default CampaignInfo;