import React from 'react'

export default function ButtonComponent({
    handleClick,
    buttonText,
    disabled,
    width
}) {
  return (
    <button 
      className='button-component' 
      onClick={handleClick} disabled={disabled}
      style={disabled ? {background : 'grey', width: '20rem'} : {width: '20rem'}}
    >
        {buttonText}
    </button>
  )
}

