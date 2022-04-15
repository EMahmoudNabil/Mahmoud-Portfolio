import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import LeftArrow from '../arrows/leftArrow';
import'./contact.styles.scss';

export const ContactUs = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    

    emailjs.sendForm("service_0xq0n2u","template_l5ubyvj", e.target, 'KKNHnp8MgjvoFMF_t')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
        //   alert("your message was delivered")
  };

  return (
    <div className="container contact-section">
    <form ref={form} onSubmit={sendEmail} className="form-group">
            <div className="row">
            <div className="col-lg-7">
            {/* <label>Subject</label>
                 <input required name="subject" className="form-control" type="text"  /> */}
                  <label>your name</label>
                 <input required name="name" className="form-control" type="text"  />
                 <label>your email</label>
                 <input name="email" className="form-control" type="text"  />
                 
            </div>
            <div className="col-lg-5">
            <label>Message</label>
            <textarea name="message" required className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
            <button className="btn" >Submit</button>
            </div>  
         
            </div>
      
    </form>

      

        <div className="arrows">
         <LeftArrow link='/projects' />
        </div>
    </div>
  );
};