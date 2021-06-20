import React from 'react'

const FormSection = ()=>{

    const [LicenseNumber, setLicenseNumber] = React.useState("")
    const [name, setName] = React.useState("")
    const [dob, setDob] = React.useState("")

    return (
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
    )
}

export default FormSection