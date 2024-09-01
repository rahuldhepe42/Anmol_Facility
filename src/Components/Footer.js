import React from 'react';
import '../Components/Footer.css';
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
    return (
        <div>
            <div className='row' id='footer'>
                <div className='col-3' id='footer1'>
                    <h3>Registered Office</h3>
                    <address>
                        Anmol Facility Management Services,
                        Nagar Rd, near Lexicon International School,
                        Ivy Estate,
                        Wagholi
                        Pune - 412207,
                        Maharashtra, India
                    </address>
                </div>

                <div className='col-3' id='footer2'>
                    <h3>Write to us</h3>
                    <div className='footer2content'>
                        <li className='servicename'>for service : <IoCall /> 7719801617</li>
                        <p><a href="mailto:amoldhepe42@gmail.com"> <IoMdMail /> amoldhepe42@gmail.com</a></p>
                        <li className='servicename2'>for job : <IoCall /> 9545362438 </li>
                        <p><a href="mailto:amoldhepe42@gmail.com"> <IoMdMail /> anmolfac@gmail.com</a></p>
                    </div>
                </div>

                <div className='col-3' id='footer3'>
                    <h3>Staffing Solutions</h3>
                    <div className='footer3content'>
                        <ul>
                        <li>Facility Management Services Provider.</li> 
                        <li>Staffing Companies in India.</li> <br></br>
                        <li>Contract Staffing Services.</li><br></br>
                        <li>Permanent Staffing Services.</li><br></br>
                        <li>Temporary Staffing Agencies.</li><br></br>
                        </ul>
                    </div>
                </div>
                <div className='col-3' id='footer4'>
                    <h3>Follow us</h3>
                    <div className='footer4content'>
                        <FaFacebookSquare className='facebook' />
                        <FaTwitter className='twitter' />
                        <FaLinkedin className='linkedin' />
                        <FaInstagram className='insta'/>
                        <FaYoutube className='youtube' />
                    </div>
                </div>
            </div>

            <div className=' footerend'>
                <div className='footerendContent'>
                    <span className='footercontent3'>Terms of Use</span>
                    <span className='footercontent3'>Privacy Policy</span>
                    <span >Cookie Policy</span>
                </div>
                <div className='footerendRights'>
                    <p>Copyright © 2024 Innovsource Services Pvt. Ltd. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer