import React from 'react';
import '../Components/FAQ.css';
import Footer from './Footer';

function FAQ() {
  return (
    <div>
      <div className='Faq'>
        <h1>Uniservice Facility Management Services- FAQ</h1>
      </div>

      <div className='Faqcontent'>
        <h1>Frequently Asked Questions</h1>
        <div className='container' id='Faqcontenthead'>
          <span> <h2>General Inquires</h2> </span>
          <span> <h2>Operation & Maintenance</h2> </span>
          <span> <h2>Legal & Compliance</h2> </span>
        </div>

        <div className='container pt-4 '>
          <div class="accordion accordion-flush " id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  ★ What is an Integrated Facility Management Services?
                </button>
              </h2>
              <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">Integrated Facility Management Services, also known as IFM, is one of the best ways to consolidate all services under a single management team and contract. The core intent of integrated facilities management services is to streamline communications and make everyday operations easier, deliver results quickly.</div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  ★ What do you mean by Technology driven facility management services?
                </button>
              </h2>
              <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">We use technology to monitor & control the daily operations. Our cloud based software tailored to give insights on the operational aspects of the facility be it power & water management, asset management, attendance management & tasks management etc.

                  Our analytics platform helps our clients to do cost effective maintenance of the facility, also help for budgeting, preventive measures and timely decision making. </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  ★ What is your business model?
                </button>
              </h2>
              <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">There are two kinds of model:
                  <ol>
                    <li>Manpower model: Budgeted head count for various facility management services and billing will be based on actual attendance. 10% management fee applicable on the total billing.</li>

                    <li>Square feet model: Involves a lumpsum model comprising manpower, materials & periodic services (tank cleaning, equipment servicing, general repairs etc). Excludes power & water bills, diesel and AMCs cost. Lumpsum billing will be made on square feet basis.</li>
                  </ol>


                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingFour">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                  ★ Can you provide few referrals of your customers and arrange site visit for the same?
                </button>
              </h2>
              <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">Yes. We can give the contact numbers of our clients with whom you can interact with and ask for feedback about our facility management services depending on the locality. We also can arrange a site visit on specified dates of interest to you.</div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingFive">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                  ★ What are your preconditioners to provide services?
                </button>
              </h2>
              <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  We expect our client to have the followings for us to provide facility management services:
                  <ol>
                    <li>Registered association (RWA)</li>
                    <li>Minimum 150 flats</li>
                    <li>Payment as per minimum wages.</li>
                    <li>Facility Manager under uniservice payroll.</li>
                    <li>Bill payments in 10 working days.</li>
                  </ol>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingSix">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                  ★ Is uniservice ok to do single service ?
                </button>
              </h2>
              <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  We generally prefer integrated facility management services to deliver best results to the society. However we would like to take any single vertical of IFMS, mentioned below!
                  <ol>
                    <li>Power Management: Skilled Electrician, Operation and Maintenance of Electrical equipments like DG, Transformer, Lifts, Motor/Pumps, Scheduled maintenance services etc.</li>
                    <li>Water Management: Skilled Plumber, Operation and Maintenance of Water Treatment Plants (WTP), Sewage Treatment Plants (STP), Reverse Osmasis Plants (ROP), Swimming Pools and Water Bodies. </li>
                    <li>Hygiene management: Housekeeping, Waste Segregation & Disposal, Pest Control, Organic composting etc</li>
                    <li>Administrative Staffs: Management staffs like Facility Manager, Assistant Facility Management, Club House Manager, Customer Relationship Manager, Receptionist, Help Desk, Respective field supervisors.</li>
                  </ol>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingSeven">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                  ★ Do you provide security services?
                </button>
              </h2>
              <div id="flush-collapseSeven" class="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">Yes. Only the guarding services are outsourced to licensed (PSARA) agencies. Rest all the services like CCTV, Fire hydrants, Speed Breakers, Sign Boards, Intercoms are managed by uniservice facility management services. We take the complete responsibility of the security services. </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingEight">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseSeven">
                ★ What are the various sizes of apartments being managed?
                </button>
              </h2>
              <div id="flush-collapseEight" class="accordion-collapse collapse" aria-labelledby="flush-headingEight" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">The residential society (Apartments, Villas) facility management services ranging from 150 flats to 800+ flats being managed by us all over Bengaluru. </div>
              </div>
            </div>



          </div>

        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default FAQ