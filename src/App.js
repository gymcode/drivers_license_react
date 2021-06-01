import './App.css';
import {useAuth0} from '@auth0/auth0-react'

function App() {

  const {loginWithPopup, loginWithRedirect, logout, user, isAuthenticated} = useAuth0()

  return (
    <div className="App">
      <hi>Driver blah blah blah </hi>
      <ul>
        <li> 
          <button onClick={loginWithPopup}> login with popup</button>
        </li>
        <li>
          <button onClick={loginWithRedirect}> login with redirect</button>
        </li>
        <li>
          <button onClick={logout}>
            logout 
          </button>
        </li>
      </ul>
    </div>
  );
}

export default App;
