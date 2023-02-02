import React, { useState, useEffect } from "react";

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
    <h1>Hi</h1>
  )
}


export default Campaign;