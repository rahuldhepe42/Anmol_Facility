import React from 'react';
import './Ourservices.css';
import Ourservices1 from '../Assets/ourservices1.png';
import Ourservices2 from '../Assets/ourservice2.png';
import Ourservices3 from '../Assets/ourservice3.png';
import Ourservices4 from '../Assets/ourservice4.png';

function OurServices() {
    return (
        <div className='Ourservice'>
            <div className='serviceheader'><h1>Our <span className='serviceName'>Services</span> </h1></div>
            <div className='colcollection'>
                <div id='servicecol' className='sercol1' >
                    <img src={Ourservices1}></img>
                    <h1>ADMINISTRATIVE</h1>
                    <p>Facility Manager, AFM, Technical Executives, Customer Relationship Manager &Help Desk Executive,Security Personnel, Accountant, Auditor etc.</p>
                    <button className='butt1 mt-4 mb-4'>Read More</button>
                </div>
                <div id='servicecol' className='sercol2'>
                    <img src={Ourservices2}></img>
                    <h1>SOFT SERVICES</h1>
                    <p>Facility Manager, AFM, Technical Executives, Customer Relationship Manager &Help Desk Executive,Security Personnel, Accountant, Auditor etc.</p>
                    <button className='butt2 mt-4 mb-4'>Read More</button>
                </div>
                <div id='servicecol' className='sercol3'>
                    <img src={Ourservices3}></img>
                    <h1>MEP OPERATIONS</h1>
                    <p>Facility Manager, AFM, Technical Executives, Customer Relationship Manager &Help Desk Executive,Security Personnel, Accountant, Auditor etc.</p>
                    <button className='butt1 mt-4 mb-4'>Read More</button>
                </div>
                <div id='servicecol' className='sercol4'>
                    <img src={Ourservices4}></img>
                    <h1>CONSULTATION</h1>
                    <p>Facility Manager, AFM, Technical Executives, Customer Relationship Manager &Help Desk Executive,Security Personnel, Accountant, Auditor etc.</p>
                    <button className='butt2 mt-4 mb-4'>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default OurServices