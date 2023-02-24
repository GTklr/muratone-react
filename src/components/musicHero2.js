import React from 'react'
import '../pages/Music.css'
import Iframe from 'react-iframe'
import hero1 from "../Assets/Hero1.webm"


export default function () {
  return (
    <div className="d-flex align-items-center video-background2">

      <video autoPlay loop muted>
        <source src={hero1} type='video/webm'/>
      </video>
      <div className="container-lg releases-section w-75 heroDetails">
        <div>
          <h1>Mixsets</h1>
            <div className="px-5 row">
              <div className="container">
                  <Iframe className="mixcloudPlayer" url="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fmuratone%2Fmuratone-deep-thrills-vol-1%2F" width="100%" height="120" />
              </div>
            </div>
        </div>
      </div>
    </div>    
  )
}
