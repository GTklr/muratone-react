import logo from '../Assets/logo 1.png'
import { Link } from 'react-router-dom';

const Home = () => {
    return ( 
        <div id="intro" className="d-flex align-items-center text-center">
            <div className="container mt-5">
              <img src={logo} style={{width: "50%"}} id="muratonelogo"></img>
                <h1 className="display-6 fw-bold py-4">DJ | Producer</h1>
                  <div className="mx-auto">
                      <div>
                        <Link to="/" className="btn btn-outline-light mx-2 disabled">profile</Link>
                        <Link to="/music" className="btn btn-success purplebtn mx-2">music</Link>
                      </div>
                  </div>
            </div>

        </div>
     );
}
 
export default Home;