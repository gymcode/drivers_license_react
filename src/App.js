import React from 'react'
// importing components 
import FormSection from "./components/form"
import axios from 'axios'

function App() {
  const [LicenseNumber, setLicenseNumber] = React.useState("")
  const [data, setData] = React.useState()

  console.log(data)

  function handleClick(e){
    e.preventDefault()

    const accesssToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI3MmE4ZDM5My00NzY3LTRmZGUtOTQxNi0zMjMxYzc5YmE4YjEiLCJhdWQiOiI1ODdmZDZhOC00MTA3LTQ4ZTktOTQyYi1lZGE4MGI0NjNkZTkiLCJzdWIiOiI0Y2M0ZDIwOC0wYjEzLTQ0NTEtYjkzNy04ZTI2NDA5OGU0ZWMiLCJuYmYiOjAsInNjb3BlcyI6WyJ2ZXJpZmljYXRpb25fdmlldyIsInZlcmlmaWNhdGlvbl9saXN0IiwidmVyaWZpY2F0aW9uX2RvY3VtZW50IiwidmVyaWZpY2F0aW9uX2lkZW50aXR5Il0sImV4cCI6MTYzOTkzMzY2OCwiaWF0IjoxNjI0MzgxNjY4fQ.WDhlexO1E_Sw9mHA7P5yZlxr6c4Av1JkiK4noVooRak'

    axios.interceptors.request.use(
      config => {
        config.headers.authorization = `Bearer ${accesssToken}`
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
        
  return (
    <div className={""}>
      {
        !data ? 
        <div className={"grid grid-cols-2 gap-2 h-screen"}>
          <div style={{background: "red"}} className={""}> 

          </div>
          <div className={""}>
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
                        <div className="mt-1 bg-red-300">
                          <button type="submit" value="hello">
                            hello
                          </button>
                        </div>
                    </div>
                </div>
            </form>
          </div>
        </div>
        :
        <>
          <div>dadadadasd</div>
        </>
      }
    </div>
  );
}

export default App;
