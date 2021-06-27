import React from 'react'; 
import { BrowserRouter as Router, Switch, Route,  } from 'react-router-dom'

// components
import HomeComponent from './components/Home';
import 

function App(){
    return (
      <React.Fragment>
        <Router>
          <Route path={"/"} component={HomeComponent}/>
          <Route path={"/activated"} component={}/>
        </Router>
      </React.Fragment>
    )
}

export default App