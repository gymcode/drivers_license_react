import React from 'react'; 
import { BrowserRouter as Router, Switch, Route,} from 'react-router-dom'

// components
import HomeComponent from './components/Home';
import ActivateComponent from './components/Activate';

export const ActivatedContext = React.createContext(null)

function App(){
    const [target, setTarget] = React.useState("")
    const [issuer, setIssuer] = React.useState("")
    const [hash, setHash] = React.useState("")
    const [signature, setSignature] = React.useState("")

    var rawData = 'Verified Ok'

    return (
      <React.Fragment>
        <Router>
          <ActivatedContext.Provider value={{target, setTarget, issuer, setIssuer, hash, setHash, signature, setSignature, rawData}}>
            <Route path={"/"} exact component={HomeComponent}/>
            <Route path={"/activated"} component={ActivateComponent}/>
          </ActivatedContext.Provider>
        </Router>
      </React.Fragment>
    )
}

export default App