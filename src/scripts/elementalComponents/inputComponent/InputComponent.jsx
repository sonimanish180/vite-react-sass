import React from 'react'

export default function InputComponent({
    name,
    type,
    onChange,
    value,
    placeHolder,
}) {
    return (
        <div className='input-component'>
            <input
                name={name}
                type={type}
                placeholder={placeHolder}
                onChange={onChange}
                value={value}
            />
        </div>
    )
}
