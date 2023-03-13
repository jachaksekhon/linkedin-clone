import React from 'react'
import "./Widgets.css"
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

  const newsArticle = (heading, subtitle) => (

    <div className="widgets__article">

        <div className="widgets__articleLeft">
            <FiberManualRecordIcon />
        </div>


        <div className="widgets__articleRight">
            <h4>{heading}</h4>
            <p>{subtitle}</p>
        </div>

    </div>   
  )

  return (
    <div className="widgets">
        <div className="widgets__header">
            <h2>LinkedIn News </h2>
            <InfoIcon />
            
        </div>
        <>
            {newsArticle("Jachak is learning to code in react", "Learning - 5,312 readers")}
            {newsArticle("Silicon Valley Bank Collapes", "Stock market moves - 10,321 readers")}
            {newsArticle("Covid no longer a threat?", "Health & Safety - 35,113 readers")}
        </>
    </div>
    
  )
}

export default Widgets