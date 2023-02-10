import React from "react";

function CampaignInfo(campaign) {
  console.log(campaign.campaign);
  
  return(
    <div className="d-flex">
      <div className="w-25">
        <img className="img-fluid responsive" src={campaign.campaign.campaign_icon_url}/>
      </div>

      <div className="d-flex flex-column align-items-start justify-content-start mx-3 py-2">
        <h3>{campaign.campaign.campaign_name}</h3>
        <h6>{campaign.campaign.pay_per_install} per install</h6>
      </div>
    </div>
  )
  
}

export default CampaignInfo;