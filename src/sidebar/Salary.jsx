import React from 'react';
import Button from './Button';
import InputField from '../components/InputField';

const Salary = ({ handleChange, handleClick }) => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md max-w-md mx-auto'>
      <h4 className='text-xl font-semibold mb-4 text-gray-800'>Salary</h4>
      <div className='flex justify-around mb-4 flex-wrap gap-2'>
        <Button onClickHandler={handleClick} value="Hourly" title="Hourly" />
        <Button onClickHandler={handleClick} value="Monthly" title="Monthly" />
        <Button onClickHandler={handleClick} value="Yearly" title="Yearly" />
      </div>

      <div className='space-y-4'>
        <label className='flex items-center space-x-2'>
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleChange}
            className='form-radio text-blue-500'
          />
          <span className='text-gray-700'>Any</span>
        </label>

        <InputField
          handleChange={handleChange}
          value={30000}
          title="< 30000k"
          name="test2"
        />
        <InputField
          handleChange={handleChange}
          value={50000}
          title="< 50000k"
          name="test2"
        />
        <InputField
          handleChange={handleChange}
          value={80000}
          title="< 80000k"
          name="test2"
        />
        <InputField
          handleChange={handleChange}
          value={100000}
          title="< 1000000k"
          name="test2"
        />
      </div>
    </div>
  );
};

export default Salary;
