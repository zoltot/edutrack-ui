import React, {Component} from 'react'
import classes from './Footer.module.css'



class  Footer extends Component {
    render(){return(
    <div className={classes.Footer__Container}>
    <div className={classes.About_Contacts}>
    <div>About</div><div>Contact</div>
    </div>
    <div>©Copyright Project Unicorn</div>
    

</div>
)};
  }



export default Footer;