
import "./links.css"

import React from 'react'
import LinkList from "../components/linkList";
import {useCollection} from "../hooks/useCollection"
import hero12 from "../Assets/hero12.webm"


export default function LinkInBio() {
 const {documents: data} = useCollection('LinkTree')
   
  return (
   <div  className="video-background d-flex align-items-center justify-content-center">
      <video autoPlay loop muted>
        <source src={hero12} type='video/webm'  />
      </video>

      <div className="container LinkContainer d-flex align-items-center justify-content-center">
         <div className="LinkSection">
            <h1 className="text-center">Links</h1>
            {!data && <p>Loading Links..</p>}
            {data && <LinkList LinkDATA={data} /> } 
         </div>
      </div>
   </div>    
  )
}
