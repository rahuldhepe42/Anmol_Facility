import React from 'react';

import { FaEye } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import './About.css';
import Footer from './Footer';


function About() {
  return (
    <div id='AboutSection' >

      <div className='aboutback'>
        <h1>Anmol is a leading Manpower Outsourcing company ranked among the top staffing companies in India!</h1>
      </div>



      <div className='journey container'>

        <h1>Our <span className='journeyheading'>Journey</span></h1>

        <div className='row' id=' journeycontent'>
          <div className='col-6 ' id='journeyfirst'></div>
          <div className='col-6' id='journeySecond'>
            <p>Established in 2004, Innovsource is a leading workforce solutions provider having fulfilled end-to-end HR needs of 1200+ customers spread across 15+ industry sectors since inception.</p>
            <p>Over the years, we at Innovsource have mastered the workforce business, focusing on every aspect, ranging from requirement mapping, sourcing, training & skilling, assessment, selection, onboarding, payrolling and statutory compliances.</p>
            <p>Today, we provide employment to 75,000+ associates who are presently deployed in more than 1080+ locations across India.</p>
            <p>We stand out for our exceptional customer service and technological advantage. Our business operations are end-to-end automated, ensuring speed, accuracy and excellence in service delivery.</p>
            <p>To know more about how we can help in your business journey, please call us at 1800224456 or write to us at sales@innov.in.</p>
          </div>
        </div>

      </div>

      <div className='container' id='visionmission'>
        <h1> Our <span className='journeyheading'>Mission</span></h1>
        <div className='visionmission'>
          <div className='vision'>
            <div className='visioncontaint'>
              <h2>Our Vision</h2>
              <FaEye className='faeye' />
            </div>
            <p>Transforming lives by enhancing economic opportunities for the workforce.</p>
            <p>Fulfilling a billion dreams daily.</p>

          </div>
          <div className='mission'>
            <div className='missioncontaint'>
              <h2>Our Mission</h2>
              <TbTargetArrow className='targetarrow' />
            </div>
            <p>To be a leading Business & HR Solutions platform delivering enduring value for all stakeholders through</p>
            <ul>
              <li>An Energized, People-Centric Culture</li>
              <li>Responsible Execution</li>
              <li>nnovative Technology</li>
            </ul>
          </div>

        </div>
      </div>

      <Footer></Footer> 

    </div>
  )
}

export default About