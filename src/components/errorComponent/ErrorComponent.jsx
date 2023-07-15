import React from 'react'
import './errorcomponent.css'
import { Link } from 'react-router-dom'
const ErrorComponent = () => {
  return (
    <div className="error_center">
        <div className="error_heading">
            404
        </div>
        <p>Please check url you typed. If you feel problem arises from our side, please tell us @ vinayhost11@gmail.com</p>
        <Link className='error_link' to="/" ><span>Go to Homepage</span></Link>
    </div>
  )
}

export default ErrorComponent