import React from 'react'
import './about.css'
const About = () => {
  return (
    <div className="about_main">
      <h1 className='about_h1'>What is Dynamic_QRs?</h1>
        <p>
            Dynamic_QRs is a website where you can generate dynamic QR codes. These QR codes are  very versatile as the message/link which these QR codes serve can be updated without any need to change QR code itself.
        </p>
        <br></br>
        <h1 className='about_h1'>What do I need to do?</h1>
        <p>
            All you need to do is to sign up and generate QR Code. You can update these QRs too. Internet Connectivity is a must for creating QR codes. Also while you scan them.
        </p>
        <br></br>
        <h1 className='about_h1'>An Important Note:</h1>
        <p>
            Dynamic_QRs is still in development stage and this is only a beta release. Any feedback, bug report, feature request or suggestion is welcome. You can provide your views @ vinayhost11@gmail.com 
        </p>
    </div>
  )
}

export default About