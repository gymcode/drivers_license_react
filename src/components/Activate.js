import React from 'react'
import { ActivatedContext } from '../App';
import {driverApp} from '../utils/configure.json'

function ActivateComponent (){
    const {hash, signature, target, issuer, rawData} = React.useContext(ActivatedContext)

    function Done() {
        
        window.opener.postMessage(`signed-data:${signature}:${rawData}:${driverApp.claimType}`, '*')
    }

    return (
        <div className={"flex justify-center items-center"}>
            <div>
                <div>Issuer: {issuer}</div>
                <div>Target: {target}</div>
                <div>Data: {rawData}</div>
                <div>Hash: {hash}</div>
                <div>Signature: {signature}</div>
            </div>
            <div>
                <button onClick={Done}>
                    Okay
                </button>
            </div>
        </div>  
    )
}

export default ActivateComponent; 