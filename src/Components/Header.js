import React from 'react';
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";



function Header() {
  return (
    <div className='headcontent'>
      
      <div className='row' id='head'>
        <div className='col-6 headcol' id='headfirst'>

          <div className='headservice'>
            <span className='servicename'>for service</span>
            <span className='servicecontact'> <IoCall /> 771980617</span>
          </div>

          <div className='headermail'>
            <p><a href="mailto:amoldhepe42@gmail.com"> <IoMdMail /> amoldhepe42@gmail.com</a></p>
          </div>

        </div>


        <div className='col-6 headcol' id='headsecond'>
          <div className='headservice2'>
            <span className='servicename2'>for job</span>
            <span className='servicecontact'> <IoCall /> 9545362438</span>
          </div>

          <div className='headermail2'>
            <p><a href="mailto:amoldhepe42@gmail.com"> <IoMdMail /> anmolfac@gmail.com</a></p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Header