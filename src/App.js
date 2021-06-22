import React from 'react'
// importing components 
import FormSection from "./components/form"
import axios from 'axios'


const accesssToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJlZWRhNDA2Zi0zN2ZlLTRkYmUtODY2ZS02YTM0ZjEwM2RlMTkiLCJhdWQiOiI1ODdmZDZhOC00MTA3LTQ4ZTktOTQyYi1lZGE4MGI0NjNkZTkiLCJzdWIiOiI0Y2M0ZDIwOC0wYjEzLTQ0NTEtYjkzNy04ZTI2NDA5OGU0ZWMiLCJuYmYiOjAsInNjb3BlcyI6WyJ2ZXJpZmljYXRpb25fdmlldyIsInZlcmlmaWNhdGlvbl9saXN0IiwidmVyaWZpY2F0aW9uX2RvY3VtZW50IiwidmVyaWZpY2F0aW9uX2lkZW50aXR5Il0sImV4cCI6MzIwMTYyMjk5OCwiaWF0IjoxNjIzNzg2MTk4fQ.q7vJs44yS12Gw1qvKL_hqkTwG3neUdh7gXYZPlkAuDA'

axios.interceptors.request.use(
  config => {
    config.headers.authorization = `Bearer ${accesssToken}`
    return config
  }, 
  error => {
    return Promise.reject(error)
  }
)

function App() {
  const [LicenseNumber, setLicenseNumber] = React.useState("")
  const [name, setName] = React.useState("")
  const [dob, setDob] = React.useState("")

  // function handleClick (e) {
  //   e.preventDefault()

  //   const Token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJlZWRhNDA2Zi0zN2ZlLTRkYmUtODY2ZS02YTM0ZjEwM2RlMTkiLCJhdWQiOiI1ODdmZDZhOC00MTA3LTQ4ZTktOTQyYi1lZGE4MGI0NjNkZTkiLCJzdWIiOiI0Y2M0ZDIwOC0wYjEzLTQ0NTEtYjkzNy04ZTI2NDA5OGU0ZWMiLCJuYmYiOjAsInNjb3BlcyI6WyJ2ZXJpZmljYXRpb25fdmlldyIsInZlcmlmaWNhdGlvbl9saXN0IiwidmVyaWZpY2F0aW9uX2RvY3VtZW50IiwidmVyaWZpY2F0aW9uX2lkZW50aXR5Il0sImV4cCI6MzIwMTYyMjk5OCwiaWF0IjoxNjIzNzg2MTk4fQ.q7vJs44yS12Gw1qvKL_hqkTwG3neUdh7gXYZPlkAuDA'

  //   const reqOptions = {
  //     method: "POST", 
  //     headers: {
  //       'Content-type': 'application/json', 
  //       'Authorization': Token
  //     }, 
  //     body: JSON.stringify({
  //       id: LicenseNumber, 
  //       full_name: name, 
  //       date_of_birth: dob
  //     })
  //   }

  //   fetch('https://api.appruve.co/v1/verifications/gh/driver_license', reqOptions)
  //   .then(response => response.json )
  //   .then(data => console.log(data))

  //   console.log("eee")
  // }

  function handleClick(e){
    e.preventDefault()


    axios.post('https://api.appruve.co/v1/verifications/gh/driver_license', 
      {
        id: LicenseNumber, 
        full_name: name, 
        date_of_birth: dob
      }
    ) 
    .then(response => console.log(response))
  } 
        
  return (
    <div className="flex justify-center">
     <form onSubmit={handleClick}>
      <div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                License Number 
                </label>
                <div className="mt-1">
                    <input
                        type="text"
                        name="email"
                        id="email"
                        onChange = {e => setLicenseNumber(e.target.value)}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="you@example.com"
                    />
                </div>
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Name of license holder
                </label>
                <div className="mt-1">
                    <input
                        type="text"
                        name="email"
                        id="email"
                        onChange = {e => setName(e.target.value)}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="you@example.com"
                    />
                </div>
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Date of birth 
                </label>
                <div className="mt-1">
                    <input
                        type="text"
                        name="email"
                        id="email"
                        onChange = {e => setDob(e.target.value)}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="you@example.com"
                    />
                </div>
            </div>
            <div>
                <div className="mt-1 bg-red-300">
                  <button type="submit" value="hello">
                    hello
                  </button>
                </div>
            </div>
        </div>
     </form>
    </div>
  );
}

export default App;
