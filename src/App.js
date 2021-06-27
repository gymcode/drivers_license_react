import React from 'react'; 
import { BrowserRouter as Router, Switch, Route,  } from 'react-router-dom'

// components
import HomeComponent from './components/Home';

function App(){
    return (
      <React.Fragment>
        <Router>
          <HomeComponent/>
        </Router>
      </React.Fragment>
    )
}

export default App