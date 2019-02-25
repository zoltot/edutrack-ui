import React, {Component} from 'react'
import classes from './SignupForm.module.css'



class  SignupForm extends Component {
    render(){return(
    <div className={classes.Signup__Container}>
    <form className={classes.Signup__Form}>

    <div className="Register Schoool">

    <div className={classes.Header}>
    <h1>Register School</h1>
    </div>

    <div className={classes.MarginBellow}>
    <label for="text"><b>School Name</b></label>
    <input  className={classes.Fulline} type="text" placeholder="School Name" name="school" required/>
    </div>

    <div className={`${classes.Signup__Form_Flex} ${classes.MarginBellow}`}>

    <div className={classes.Halfline} >
    <label for="text"><b>Address</b></label>
    <input type="text" placeholder="Address" name="address" required  className={classes.Fill}/>
    </div>
    
    <div className={classes.Quarterline} >     
    <label for="text"><b>Postal Code</b></label>
    <input type="text" placeholder="Postal Code" name="postal" required />
    </div>

    <div className={classes.Quarterline} > 
    <label for="text"><b>Students #</b></label>
    <input type="text" placeholder="Students" name="students" required />
    </div>    

    </div>

    </div>

    <div className="Register Admin">
    <h1>Create Admin Account</h1>

    <div className={`${classes.Signup__Form_Flex} ${classes.MarginBellow}`}>
        <div className={classes.Halfline}>

        <label for="text"><b>First Name</b></label>
        <input  type="text" placeholder="First Name" name="firstname" required/>
        </div>    

        <div className={classes.Halfline}>
        <label for="text"><b>Last Name</b></label>
        <input  type="text" placeholder="Last Name" name="lastname" required/>
        </div>    
    </div>

    <div className={classes.MarginBellow}>
    <label for="email"><b>Email</b></label>
    <input  className={classes.Fulline} type="text" placeholder="Enter Email" name="email" required/>
    </div>

    <div className={classes.MarginBellow}>
    <label for="psw"><b>Password</b></label>
    <input  className={classes.Fulline} type="password" placeholder="Enter Password" name="password" required/>
    </div>

    <div className={`${classes.Signup__Form_Flex_Full} ${classes.MarginBellow}`}>
    <button type="submit" className={classes.Signup__Form__Button}>Submit</button>
    <div className={classes.ParagraghLine}>    
    <p>By clicking submit, you indicate that you are authorized by the school provided to create an account.
     False Information will result in being account deletion as soon as possible</p>
    </div>
    </div>

    </div>

    </form>
    <div className={classes.Footer}>
        <p className={classes.Footer__Text}>Footer</p>
    </div>


</div>
)};
  }



export default SignupForm;