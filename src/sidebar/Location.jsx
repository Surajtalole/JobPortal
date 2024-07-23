import React from 'react';
import InputField from '../components/InputField';

const Location = ({ handleChange }) => {
  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h4 className="text-xl font-semibold mb-4 text-gray-800">Location</h4>
      <div className="space-y-2">
        <InputField handleChange={handleChange} value="" title="All" name="location" />
        <InputField handleChange={handleChange} value="london" title="London" name="location" />
        <InputField handleChange={handleChange} value="seattle" title="Seattle" name="location" />
        <InputField handleChange={handleChange} value="madrid" title="Madrid" name="location" />
        <InputField handleChange={handleChange} value="boston" title="Boston" name="location" />
      </div>
    </div>
  );
};

export default Location;
