import React from 'react'
import Web3 from 'web3'

// importing components 
import FormSection from "./components/form"
import axios from 'axios'

function App() {
  const [LicenseNumber, setLicenseNumber] = React.useState("")
  const [data, setData] = React.useState()
  const [isLoading, setIsLoading] = React.useState(false)

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

  function doneDeal(){
    console.log(window.location)
  }
        
  return (
    <div className={""}>
        <div className={"grid grid-cols-2 gap-2 h-screen"}>
          <div style={{background: "red"}} className={""}> 

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

export default App;
