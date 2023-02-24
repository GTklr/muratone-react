import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Footer.css'

//FA Icons
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faSoundcloud } from '@fortawesome/free-brands-svg-icons'
import { faMixcloud } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faBootstrap } from '@fortawesome/free-brands-svg-icons'

//Bootstrap popover
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

export default function Footer({reactClick}) {

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>
      <FontAwesomeIcon icon={faReact}/>
      &nbsp; | &nbsp;
      <FontAwesomeIcon icon={faBootstrap}/>
      </Popover.Body>
    </Popover>
  );

  return(
      <div className="">
        <footer className="d-flex flex-wrap justify-content-between align-items-center px-3">
          <div className="col-md-4 d-flex align-items-center copyright">
            <span className="mb-3 mb-md-0 infotext"> © 2023 Muratone |  &nbsp;
              <OverlayTrigger trigger="click" placement="top" overlay={popover}>
                <FontAwesomeIcon icon={faReact} className="social-icons" />
              </OverlayTrigger> 
            </span>

          </div>
          
            <ul className="nav col-lg-6 col-md-12 col-12 justify-content-end list-unstyle social-icons-group">

              <li className="ms-3">
                <a href="https://open.spotify.com/artist/05d3FO1h0tnn4G8yRw3bzp" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faSpotify} className="social-icons"/>
                </a>
              </li>
              
              <li className="ms-3">
                <a href="https://www.facebook.com/MuratoneMusic" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faFacebook} className="social-icons"/>
                </a>
              </li>

              <li className="ms-3">
                <a href="https://www.instagram.com/mura.tone/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="social-icons"/>
                </a>
              </li>

              <li className="ms-3">
                <a href="https://soundcloud.com/muratone" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faSoundcloud} className="social-icons"/>
                </a>
              </li>
              
              <li className="ms-3">
                <a href="https://www.mixcloud.com/muratone/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faMixcloud} className="social-icons"/>
                </a>
              </li>

              <li className="ms-3">
                <a href="mailto: hello@00digital.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faEnvelope} className="social-icons"/>
                </a>
              </li>
              
              <li className="ms-3 text-muted fw-bold d-none" id="builtwith">
              <OverlayTrigger trigger="click" placement="top" overlay={popover}>
                <FontAwesomeIcon icon={faReact} className="social-icons" />
              </OverlayTrigger>
              </li>
              
            </ul>
        </footer>
      </div>

     )}