import './linkList.css'
import { Accordion } from 'react-bootstrap'
import Spotify from 'react-spotify-embed'
import Iframe from 'react-iframe'

//firebase
import {db} from '../firebase/config'
import {doc, deleteDoc} from 'firebase/firestore'

export default function CreateLinkList( {LinkDATA, urls}) {

const sortedLinks = (
   LinkDATA.sort(function compare (a,b){
      var dateA = new Date(a.date);
      var dateB = new Date(b.date);
      var sortedLinks = dateB - dateA
      return sortedLinks
   }))

   if(sortedLinks.length === 0) {

      return <div className="error">No Recipes to load...</div>
    }

    const handleDelete = async (id) => {
      const docRef = doc(db, "LinkTree", id)
      await deleteDoc(docRef)

    }
  return (
   
      <div className="link-list bg-dark">
        
         {sortedLinks.map(sortedLinks => (
            <div key={sortedLinks.id} className="row align-items-start bg-secondary">
               <div className="col-11">
                  <Accordion>
                     <Accordion.Item eventKey="0" >
                     <Accordion.Header className="AccordionHeader">
                        <h3 className="">{sortedLinks.title}</h3>
                     </Accordion.Header>
                     <Accordion.Body className="bg-dark text-white">
                        
                     {sortedLinks.embedd.includes('spotify') && <Spotify wide link={sortedLinks.embedd}/>}
                     {!sortedLinks.embedd.includes('spotify') && <Iframe url={sortedLinks.embedd} width="100%" height="120" />}
                     {sortedLinks.normalLink&& <a className="btn btn-md btn-success purplebtn" href={sortedLinks.normalLink} target="_blank"> VISIT SITE </a>}
                  
                     </Accordion.Body>
                     </Accordion.Item>
                  </Accordion>
               </div>

               <div className="col-1 align-self-top pt-3 bg-secondary">
                  <button className="btn btn-sm purplebtn btn-success" onClick={() => handleDelete(sortedLinks.id)}>X</button>
               </div>
            </div>
        ))}

      </div>
  )
}