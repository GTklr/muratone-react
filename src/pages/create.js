import { useState} from 'react'
import CreateLinkList from '../components/createLinkList'

//firebase imports
import {db} from '../firebase/config'
import {collection, addDoc} from 'firebase/firestore'
import {useCollection} from "../hooks/useCollection"


//styles
import './Create.css'

import React from 'react'
import { useHistory } from 'react-router-dom'


function Create() {

const {documents: data} = useCollection('LinkTree')
  const [title, setTitle] = useState('')
  const [embedd, setEmbedd] = useState('')
  const [normalLink, setNormalLink] = useState('')

  var m,
   urls = [], 
   str = embedd,
   rex = /(?<=src=").*?(?=[\"])/g;
  
  function embeddLinkExtract() {
   
      if (str.includes('spotify')) {
         urls = ( str )
      } else {
         while ( m = rex.exec( str ) ) {
            urls = ( m[0] );
         }}}
  
   const newMiliTime = Date.now()
   
  const handleSubmit = async (e) => {
    e.preventDefault()

    embeddLinkExtract(embedd)

    await addDoc(collection(db, "LinkTree"), {
      title: title,
      embedd: urls,
      normalLink: normalLink,
      date: newMiliTime,
    })

    setTitle('')
    setEmbedd('')
    setNormalLink('')
  }
  
  return (
    <div className="bg-secondary">
      <div className="container create">
         <h2 className="page-title">Add a new link</h2>

         <form onSubmit={handleSubmit} className="d-flex flex-column">
            <label>
               <span> title:</span>
               <input type="text" onChange={(e) => setTitle(e.target.value)}
               value={title}
               required/>
            </label>

            <label>
               <span> embedd:</span>
               <span className="text-muted"> Paste HTML embedd links </span>
               
               <textarea 
               onChange={(e) => setEmbedd(e.target.value)}
               value={embedd}
               />
            </label>

            <label>
               <span> normal links:</span>
               <textarea 
               onChange={(e) => setNormalLink(e.target.value)}
               value={normalLink}
               />
            </label>    

               <button className="btn purplebtn btn-success">submit</button>
         </form>

         <div>
            <h2>Current links</h2>
            {data && <CreateLinkList LinkDATA={data} urls={urls}/> }
         </div>
      </div>
   </div>
  )
}

export default Create