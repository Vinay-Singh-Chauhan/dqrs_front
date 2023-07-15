import React from 'react'
import './loadingcomponent.css'
import loading from './loading.gif'
const LoadingComponent = () => {
  return (
    <div className="loading_center">
        <div className='loading_loader'>
        
        <img src={loading} alt="loading" />
        </div>
        <div className="loading_heading">
            Please wait...
        </div>
    </div>
  )
}

export default LoadingComponent