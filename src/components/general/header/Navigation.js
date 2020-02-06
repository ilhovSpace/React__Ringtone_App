import React,{useState} from "react"
import Home from '../../home/Home'
import PersonalCabinet from '../../personalCabinet/PersonalCabinet'
import Login from './Login'
import ModalLogin from '../../home/content/ModalLogin'
import { connect } from 'react-redux'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom"; 

 function Navigation(props) {
    const [showLogin, setShowLogin] = useState(false);
    const handleCloseLogin = () => setShowLogin(false);
    const handleShowLogin = () => setShowLogin(true);

    return (
      <Router>
        <div className="navbar navbar-dark bg-success navbar-expand-lg" style={{justifyContent: 'space-between'}}>
          <ul className='navbar-nav'>
            <li className='nav-item'><Link to="/" className='nav-link'>Home</Link></li>
            <li>{props.authorize.status ? 
              <Link to="/personalCabinet" className='nav-link'>Personal Cabinet</Link> : 
              <Link to="/" className='nav-link' onClick={handleShowLogin}>Personal Cabinet</Link>}
            </li>  
            </ul>
            <Login></Login>
            <ModalLogin 
                showLogin={showLogin} 
                handleCloseLogin={handleCloseLogin} 
            ></ModalLogin>  
        </div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/personalCabinet">
               <PersonalCabinet />
            </Route>
          </Switch>
      </Router>
    );
  }
  
  function mapStateToProps(state){
    return {
        authorize: state.authorizeReducer.authorize
    }
}


export default connect(mapStateToProps)(Navigation)
  
