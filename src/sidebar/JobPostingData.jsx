import React from 'react';
import InputField from '../components/InputField';

const JobPostingData = ({ handleChange }) => {
  const now = new Date();

  const twentyFourHoursAgo = new Date(now - 24 * 60 * 60 * 1000);
  const sevenDaysAgo = new Date(now - 7 * 24 * 60 * 60 * 1000);
  const thirtyDaysAgo = new Date(now - 30 * 24 * 60 * 60 * 1000);

  // Convert date to string
  const twentyFourHoursAgoDate = twentyFourHoursAgo.toISOString().slice(0, 10);
  const sevenDaysAgoDate = sevenDaysAgo.toISOString().slice(0, 10);
  const thirtyDaysAgoDate = thirtyDaysAgo.toISOString().slice(0, 10);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h4 className="text-xl font-semibold mb-4 text-gray-800">Date of Posting</h4>
      <div className="space-y-4">
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="test"
            value=""
            onChange={handleChange}
            className="form-radio text-blue-500"
          />
          <span className="text-gray-700">All Time</span>
        </label>
        <InputField handleChange={handleChange} value={twentyFourHoursAgoDate} title="Last 24 hours" name="test" />
        <InputField handleChange={handleChange} value={sevenDaysAgoDate} title="Last 7 days" name="test" />
        <InputField handleChange={handleChange} value={thirtyDaysAgoDate} title="Last Month" name="test" />
      </div>
    </div>
  );
};

export default JobPostingData;
