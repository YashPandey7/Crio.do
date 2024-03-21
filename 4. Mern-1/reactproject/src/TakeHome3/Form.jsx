import React from 'react';

const Form = () => {

    const addwhen = () => {
        
    }

  return (
    <>
        <h1>Book a session</h1>
        <p>Fill in the form below to boom a virtual session with your doctor</p>
        <form>

            <div>
                <b>Basic Info</b>
                <br/><br/>
                FirstName 
                <input type='text'/>
                <br/>

                LastName  
                <input type='text'/>
                <br/>

                Email 
                <input type='email'/>
                <br/><br/>
            </div>
            
            <div>
                <b>Doctor</b>
                <br/><br/>
                <select onChange={addwhen}>
                    <option value="">Select your doctor</option>
                    <option value="JOHN_HOPKINS">Dr. John Hopkins</option>
                    <option value="MAYA_MARIN">Dr. Maya Marin</option>
                    <option value="DONNA_DOUGLAS">Dr. Donna Douglas</option>
                </select>
                <br/>
                
                <div id="location"></div>

                <button type='submit'>Confirm Booking</button>
            </div>

        </form>
    </>
  );
}

export default Form;