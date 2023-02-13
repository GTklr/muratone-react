
import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import NavbarOne from './components/navbar';
import MusicPage from './pages/music'
import Footer from './components/footer';
import Contact from './pages/contact';
import LinkInBio from './pages/links';
import Create from './pages/create';
import SignUp from './pages/signup'
import Login from './pages/Login'
import { useAuthContext } from './hooks/useAuthContext';



function App() {

      const {user, authIsReady} = useAuthContext()

  return (
  <Router>
    <div className="App">

        <NavbarOne/>
       
        <div className="content">
        <Switch>
          
          <Route exact path="/">
                <Home> </Home>
          </Route>

          <Route path="/music">
                <MusicPage />
          </Route>

          <Route path="/links">
                <LinkInBio />
          </Route>
          
            {authIsReady && (
            <Route path="/link-create">
                <Create />
          </Route>)}
          
          <Route path="/contact">
                <Contact />
          </Route>
          
          <Route path="/signup">
                <SignUp />
          </Route>

          <Route path="/login">
               {!user && (<Login />)}
               {user && (<Redirect to="/" />)}
          </Route>


        
      

        </Switch>
        </div>
       
      <Footer></Footer>
    </div>
  </Router>
    
  );
}

export default App;
