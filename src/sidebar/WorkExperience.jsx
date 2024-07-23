import React from 'react';
import InputField from '../components/InputField';

const WorkExperience = ({handleChange}) => {
  return ( 
    <div className="p-4 bg-white rounded-lg shadow-md">
    <h4 className="text-xl font-semibold mb-4 text-gray-800">Work Experience</h4>
    <div className="space-y-4">
      <label className="flex items-center space-x-2">
        <input
          type="radio"
          name="test"
          value=""
          onChange={handleChange}
          className="form-radio text-blue-500"
        />
        <span className="text-gray-700">Any experience</span>
      </label>
      <InputField handleChange={handleChange} value="Internship"title="Internship" name="test" />
      <InputField handleChange={handleChange} value="Work remotely" title="work remotely" name="test" />
    </div>
  </div>
  )
}

export default WorkExperience