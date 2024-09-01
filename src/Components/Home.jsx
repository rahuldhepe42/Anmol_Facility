import React from 'react';
import { GrMicrofocus } from "react-icons/gr";
import Back1 from '../Assets/back1.jpg';
import Back2 from '../Assets/back2.jpg';
import Back3 from '../Assets/back3.jpg';
import Back4 from '../Assets/back4.jpg';
import Back5 from '../Assets/back5.jpg';
import Process1 from '../Assets/process1.png';
import Process2 from '../Assets/process2.png';
import Process3 from '../Assets/process3.png';
import OurServices from './OurServices';
import Footer from './Footer';



function Home() {
  return (
    <div className='homecontent'>

      <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">

            <img src={Back2} class="d-block w-100 " />
            <div class="carousel-caption  d-md-block">
              <h1 className='text-white'>We provide round the clock service to make
                your living better!</h1>

            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">

            <img src={Back3} class="d-block w-100" />
            <div class="carousel-caption  d-md-block">
              <h1 className='text-white'>Premier Integrated Facility Management Service Provider
                in Pune</h1>

            </div>
          </div>
          <div class="carousel-item">

            <img src={Back1} class="d-block w-100" />
            <div class="carousel-caption  d-md-block">
              <h1 className='text-white'>Uniservice Driven by Technology</h1>

            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      {/* key focus */}
      <div className='keycontent'>
        <div className='row' id='keyfocus'>

          <div className='col-5 keyfirst' >
            <GrMicrofocus className='key' />
            <h1 className='keyh1'>Our Key</h1>
            <h1 className='keyh2'>Focus</h1>
          </div>
          <div className='col-7' id='keysecond'>
            <div className='keycontaint'>
              <ul>
                <li>100% in-house staffs - No outsource or sub-contracts of facility management services</li>
                <li>People, processes and betterment of the quality of living</li>
                <li>Technology-backed facility management services customized for every facility</li>
                <li>Predictive maintenance and effective 24*7 operations</li>
                <li>100% legal compliance in operations</li>
                <li>Technology-backed facility management services customized for every facility</li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      <div className='row ' id='diffsection' >

        <div className='col-6' id='diffirst'>
          <h1>
            <span className='why'> Why</span> we are <spam className="different" >different</spam>
          </h1>
          <p>
            We started with a single-minded vision: to change the way facility management business is perceived and run. We thus built our systems and processes around the same. <b>Our variations of Integrated Facility Management services such as housekeeping Services, Security, and Technical Support services have helped commercial and residential entrepreneurs all over India to manage their facilities.</b> Our teams rigorously researched client needs and then we built services to match them. Our deep understanding of the client’s business allows us to assess their needs and thus customise solutions for them. Over the past decade, we have successfully managed to move from the backroom to the boardroom mindset; in other words, we have partnered with our clients to reduce costs and enhance their bottom-line. If we have to sum up our differentiators in one sentence it would be:
          </p>
        </div>
        <div className='col-6' id='difsecond'>

        </div>

      </div>

      <div className='row ' id='process' >
        <h1>Our <span className='different'>Process</span></h1>
        <div className='processcontain'>
          <div className='col-4' id='processfirst'>
            <div className='circleone'>
              <img src={Process1} />
              <h3>Plan a site visit with our executive.</h3>
            </div>

          </div>
          <div className='col-4' id='processsecond'>
            <div className='circleone'>
              <img src={Process2} />
              <h3>Receive a detailed site analysis.</h3>
            </div>
          </div>
          <div className='col-4' id='processthird'>
            <div className='circleone'>
              <img src={Process3} />
              <h3>Customised proposal based on site analysis</h3>
            </div>
          </div>
        </div>
      </div>

      <OurServices></OurServices>
      <Footer></Footer>

    </div>
  )
}

export default Home