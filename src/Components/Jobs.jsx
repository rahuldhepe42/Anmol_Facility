import React from 'react';
import '../Components/Jobs.css';

function Jobs() {
  return (
    <div className='Jobs'>
      <div className='container Jobcontainer'>
        


      <div className="signup">
                <form >
                    <h3>Sign Up</h3>

                
                    <div className="mb-3">
                        <label>First name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="First name"
                            name="fname"
                           
                            
                        />
                    </div>

                    <div className="mb-3">
                        <label>Last name</label> 
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Last name"
                            name="lname"
                           
                            
                        />
                    </div>

                    <div className="mb-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            name="email"
                           
                            
                        />
                    </div>

                    <div className="mb-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            name="password"
                        
                            
                        />
                    </div>

                    


                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary">
                            Sign Up
                        </button>
                    </div>

                    <p className="forgot-password text-right mt-3">
                        Already registered <a href="/signinpage">Sign In</a>
                    </p>
                </form>
            </div>
      </div>
    </div>
  )
}

export default Jobs