import React from 'react'
import { ActivatedContext } from '../App';

function ActivateComponent (){
    const {hash, signature, target, issuer} = React.useContext(ActivatedContext)
    return (
        <React.Fragment>
            {hash}
            
        </React.Fragment>
    )
}

export default ActivateComponent; 