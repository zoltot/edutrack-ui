import React from 'react';
import classes from './ContactUs.module.css';
import Footer from '../Footer/Footer';
import trianglify from '../../assets/trianglify.svg';


const ContactUs = () => { return (
  <div className={classes.Contact_us_Container}>
    <div className={classes.Top_Section}>
      <div className={classes.Top_Interact_Section}>
        <h1>Let's Talk!</h1>
        <p>We would love to answer any questions you may have.</p>

        <input type="text" placeholder="Enter Your Name" />
        <input type="text" placeholder="Enter Your Email Address" />
        <input type="text" placeholder="What Can We Help You With" />

        <button type="submit">Send Message</button>
      </div>
      <div className={classes.Top_Image_Section}>
        <img width="100%" height="100%" src={trianglify} alt="logo" className={classes.Image}/>
        <div className={classes.square}></div>
        <div className={classes.rectangle}></div>
        <div className={classes.circle}></div>
        <div className={classes.square2}></div>
        <div className={classes.rectangle2}></div>
        <div className={classes.circle2}></div>




      </div>

      </div>


    <div className={classes.Footer_Section}>

      <Footer />
    </div>
  </div>
);
};

export default ContactUs;