import React, { useState, useEffect } from "react";
import CampaignInfo from "./CampaignInfo";
import CampaignMedia from "./CampaignMedia";

function Campaign() {
  const [campaigns, setCampaigns] = useState([]);

  const fetchData = () => {
    return fetch('https://www.plugco.in/public/take_home_sample_feed')
            .then(response => response.json())
            .then(data => setCampaigns(data.campaigns))
  }

  useEffect(() => {
    fetchData();
  },[])

  console.log(campaigns);
  return (
    <div className="py-5">
      {campaigns.map((campaign) => {
        return (
          <div>
            <CampaignInfo key={campaign.id} campaign={campaign} />
            <CampaignMedia />
          </div>
        )
      })}
      
    </div>
  )
}


export default Campaign;