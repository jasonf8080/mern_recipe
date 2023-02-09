import React from 'react'

const FormInput = ({name, type, value, changeValue}) => {
  return (
     <div className="form-input">
        <label htmlFor={name}>{name}</label>
        <input type={type} name={name} value={value} onChange={changeValue}/>
    </div>

  )
}

export default FormInput
