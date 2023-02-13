
import "./links.css"

import React from 'react'
import LinkList from "../components/linkList";
import {useCollection} from "../hooks/useCollection"


export default function LinkInBio() {
 const {documents: data} = useCollection('LinkTree')
   
  return (
   <div id="linkinbioBG" className="d-flex align-items-center">
      <div className="container w-75 LinkContainer ">


         <div className="LinkSection ">
         <h1 className="text-center">Links</h1>
            {data && <LinkList LinkDATA={data} /> } 
         </div>
      </div>
   </div>    
  )
}
