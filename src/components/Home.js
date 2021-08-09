/* eslint-disable jsx-a11y/alt-text */

import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import Web3 from 'web3'
import {ActivatedContext} from '../App'
import sorry from './ss.css'

import image from '../asset/image.jpg'
// importing components 
import axios from 'axios'

// importing claimsignerkey 
import {driverApp, accessToken} from '../utils/configure.json'

// declaring web3 variables 
const web3js = new Web3()
var rawData = 'Verified Ok'
var hexCode = web3js.utils.asciiToHex(rawData)

function HomeComponent() {
  const [LicenseNumber, setLicenseNumber] = React.useState("")
  const [data, setData] = React.useState()
  const [isLoading, setIsLoading] = React.useState(false)
  const {target, setTarget, setIssuer, setSignature, setHash} = React.useContext(ActivatedContext)

  let History = useHistory()

  function handleClick(e){
    e.preventDefault()

    axios.interceptors.request.use(
      config => {
        config.headers.authorization = `Bearer ${accessToken.Token}`
        return config
      }, 
      error => {
        return Promise.reject(error)
      }
    )

    axios.post('https://api.appruve.co/v1/verifications/gh/driver_license', 
      {
        id: LicenseNumber,        
      }
    ) 
    .then( ({data}) => setData(data))
  } 

  async function doneDeal(){

    const url = window.location.href
    const getIssuer = url.split('issuer=')[1]
    const getTarget = url.slice(30, 72)

    setTarget(getTarget)
    setIssuer(getIssuer) 

    // adding the hashing function 
    var hashed = web3js.utils.soliditySha3(target, driverApp.claimType, hexCode)
    var signedData = await web3js.eth.accounts.sign(hashed, driverApp.claimSignerKey)
    setSignature(signedData.signature)
    setHash(signedData.messageHash)
    console.log(signedData.messageHash)
    console.log(signedData.signature)

    History.push(`/activated?hashed=${hashed}signedData=${signedData.signature}`)

  }
        
  return (
    <div className={"amen"}>
        <div className={"grid grid-cols-2 gap-2 h-screen"}>
          <div className={""}> 
            <img src={image} className={"bg-cover"} style={{height: "100vh", width: "100vh"}}/>
          </div>
          <div className={"flex justify-center items-center"}>
           {
             !data ? 
             <form onSubmit={handleClick}>
             <div>
                  <div>
                      <label htmlFor="number" className="block text-2xl font-medium my-5 text-gray-700">
                      License Number 
                      </label>
                      <div className="mt-1">
                          <input
                              type="text"
                              name="number"
                              id="number"
                              onChange = {e => setLicenseNumber(e.target.value)}
                              placeholder="G00000000001"
                              className={"h-10 px-3 ring-2 block w-full sm:text-sm border-gray-300 rounded-md"}
                          />
                      </div>
                   </div>
                   <div>
                     <button type="submit" className="mt-8 bg-red-300 w-full h-10 shadow-lg " value="hello">
                       <div>
                           Check Validity
                       </div>
                     </button>
                   </div>
               </div>
           </form>
           : 
           <div>
            <div>{data.id}</div>
            <div>{data.date_of_birth}</div>
            <div>{data.issue_date}</div>
            <div>{data.full_name}</div>
            <div>{data.expiry_date}</div>
            <div>
              <button onClick={doneDeal}>
                okay
              </button>
            </div>
          </div>
           }
          </div>
        </div>
    </div>
  );
}

export default HomeComponent;
