import React from 'react'
import '../pages/Music.css'

//artwork
import herArtwork from "../Assets/Her.jpg"
import comingSoonArtwork from "../Assets/comingsoon.jpg"
import gspotArtwork from "../Assets/19_Muratone_G-Spot_Cover.jpg"

// embed packages
import Spotify from 'react-spotify-embed'


export default function () {
  return (
    <div id="musichero1" className="d-flex align-items-center">
        <div className="container-lg w-75 heroDetails">

            <h1>Releases</h1>
              <div className="py-3 row">
                <div className="col-12 col-lg-4 indivRelease">
                  <img src={herArtwork} className="img-fluid rounded-2 albumArt"/>

                  <Spotify className="pt-2 spotifyPlayer albumArt" wide link="https://open.spotify.com/track/28LtzR9F5GlrCemanc3uzY?si=15256c78f9dd40cb"/>
                </div>

                <div className="col-12 col-lg-4 indivRelease">
                  <img src={gspotArtwork} className="img-fluid rounded-2 albumArt"/>
                  
                  <Spotify className="pt-2 spotifyPlayer" wide link="https://open.spotify.com/track/3kkj3XbZr3hGpC2oknrul0?si=99490ab4de284282"/>
                </div>

                <div className="col-12 col-lg-4 indivRelease">
                  <img src={comingSoonArtwork} className="img-fluid rounded-2 albumArt"/>
                  
                  <p className='pt-4'>coming soon</p>
                </div>
                
              </div>
        </div>
    </div>    
  )
}
