import React from 'react';
import "../Contact/Contact.css";

function Contact() {
  return (
    <>
     <div className='contact-page mt-1'>
        <div className="header mt-5 ml-5">
            <h5 className='display-6'>ContactUs</h5>
        </div>
        <div className="body">
          <p>We are here to help you and answer any questions you may 
            have. Here is how to reach us! </p>
        </div>
        <div className="image">
            <img src='https://png.pngtree.com/element_our/20200610/ourmid/pngtree-contact-us-24-hours-image_2241411.jpg' alt='contact-image'/>
        </div>
     </div>
        <div className="details mt-3 ml-4">
            <i class="fa fa-envelope">&nbsp; pavan19082001@gmail.com </i><br/><br/>
            <i class="fa fa-phone">&nbsp;  9912032383 </i>
        </div>
    </>
  )
}

export default Contact