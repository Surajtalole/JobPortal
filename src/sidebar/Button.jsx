import React from 'react'

function Button({onClickHandler, value,title}) {
  return (
   <button onClick={onClickHandler} value={value} className={`px-2 py-2 border text-base hover:bg-blue hover:text-white`}> 
    {title}
   </button>
  )
}

export default Button