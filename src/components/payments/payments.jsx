import React, { useState } from 'react'
import './payments.css'
const Payments = () => {
    const [email, setemail] = useState('chauhamsvinay@gmail.com')
  return (
    <div className="payment_main">
        <div className='payment_center_msg'>Hurray! We are trying to maintain this site for Free</div>
    </div>
  )
}

export default Payments