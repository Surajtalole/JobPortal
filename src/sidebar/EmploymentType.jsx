import React from 'react'
import InputField from '../components/InputField'

const EmploymentType = ({handleChange}) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
    <h4 className="text-xl font-semibold mb-4 text-gray-800">Type Of Employment</h4>
    <div className="space-y-4">
      <label className="flex items-center space-x-2">
        <input
          type="radio"
          name="test"
          value=""
          onChange={handleChange}
          className="form-radio text-blue-500"
        />
        <span className="text-gray-700">All</span>
      </label>
      <InputField handleChange={handleChange} value="full-time"title="Full-time" name="test" />
      <InputField handleChange={handleChange} value="temporary" title="Temporary" name="test" />
      <InputField handleChange={handleChange} value="part-time" title="Part-time" name="test" />

    </div>
  </div>
  )
}

export default EmploymentType