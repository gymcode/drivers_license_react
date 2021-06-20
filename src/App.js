import React from 'react'

// importing components 
import FormSection from "./components/form"

function App() {
  const [LicenseNumber, setLicenseNumber] = React.useState("")
  const [name, setName] = React.useState("")
  const [dob, setDob] = React.useState("")
  
  React.useEffect(()=>{
    // post request options 
    const reqOptions = {
      method: "POST", 
      headers: {'Content-type': 'application/json'}, 
      body: JSON.stringify({
        id: LicenseNumber, 
        full_name: name, 
        date_of_birth: dob
      })
    }

    const handleClick =fetch('https://api.appruve.co/v1/verifications/gh/driver_license', reqOptions)
      .then(response => response.json )
      .then(data => console.log(data))

  }, [])

  return (
    <div className="flex justify-center">
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
        </div>
    </div>
  );
}

export default App;
