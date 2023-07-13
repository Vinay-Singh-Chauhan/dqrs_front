import React from 'react'
const Input = ({label,input_name,input_ref,type,setValue,value,setValueFocus,validValue,placeholder_text,uidtext,valueFocus}) => {
  return (
    <div >
            {/* <label htmlFor={`${input_name}`}>{label}</label> */}
            <input
            autoComplete={"off"}
            className="qrform_input qrform_link"
              name={`${input_name}`}
              id={`${input_name}`}
              type={`${type}`}
              ref={input_ref}
              // autoComplete="off"
              onChange={(e)=>{setValue(e.target.value)}}
              placeholder={`${placeholder_text}`}
              required
              aria-invalid={validValue?"false":"true"}
              aria-describedby={`${input_name}_uidnote`}
              onFocus={()=>{
                setValueFocus(true)
              }}
              onBlur={()=>{
                setValueFocus(false)
              }}
            />
            
            <p
            id={`${input_name}_uidnote`}
            className={valueFocus && value && !validValue?"instructions":"offscreen"}
            >
              {uidtext}
            </p>
          </div>
  )
}

export default Input