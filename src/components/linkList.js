import './linkList.css'
import { Accordion } from 'react-bootstrap'
import Spotify from 'react-spotify-embed'
import Iframe from 'react-iframe'

export default function LinkList( {LinkDATA}) {

   if(LinkDATA.length === 0) {

      return <div className="error">No links to load...</div>
    }

    const embedString = LinkDATA.embedd

    const sortedLinks = (
      LinkDATA.sort(function compare (a,b){
         var dateA = new Date(a.date);
         var dateB = new Date(b.date);
         var sortedLinks = dateB - dateA
         return sortedLinks
      }))

  return (
   
      <div className="link-list bg-dark">
        
        {sortedLinks.map(sortedLinks => (
            <div key={sortedLinks.id}>

                  <Accordion>
                     <Accordion.Item eventKey="0" >
                     <Accordion.Header className="AccordionHeader">
                        <h3 className="">{sortedLinks.title}</h3>
                     </Accordion.Header>
                     <Accordion.Body className="bg-dark text-white">
                        
                     {sortedLinks.embedd.includes('spotify') && <Spotify wide link={sortedLinks.embedd}/>}
                     {!sortedLinks.embedd.includes('spotify') && <Iframe url={sortedLinks.embedd} width="100%" height="120" />}
                     {sortedLinks.normalLink&& <a className="btn btn-md btn-success purplebtn d-flex align-items-center" href={sortedLinks.normalLink} target="_blank"> VISIT SITE </a>}
                  
                     </Accordion.Body>
                     </Accordion.Item>
                  </Accordion>

            </div>
        ))}

      </div>
  )
}