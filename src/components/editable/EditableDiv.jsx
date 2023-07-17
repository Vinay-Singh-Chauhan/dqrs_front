import React from 'react'
import Editable from './Editable'
const EditableDiv = ({link}) => {
  return (
    <Editable
      text={link}
      placeholder="Enter Link"
      type="input"
    >
      <input
        type="text"
        name="task"
        placeholder="Enter Link"
        value={link}
        // onChange={e => console.log()}
      />
      
    </Editable>
  )
}

export default EditableDiv