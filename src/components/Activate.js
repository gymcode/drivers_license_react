import React from 'react'
import { ActivatedContext } from '../App';

function ActivateComponent (){
    const {hash, signature, target, issuer} = React.useContext(ActivatedContext)

    function Done() {

    }

    return (
        <div className={"flex justify-center items-center"}>
            <div>
                <div>Issuer: {issuer}</div>
                <div>sdsdssd</div>
                <div>sdsdssd</div>
                <div>sdsdssd</div>
                <div>sdsdssd</div>
                <div>sdsdssd</div>
            </div>
        </div>  
    )
}

export default ActivateComponent; 