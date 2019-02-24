import * as React from "react";
import styled from "styled-components";

const LoginModalWrapper = styled.div`
position: absolute;
top: 5%;
left: 50%;
z-index: 1; 
background-color: #FFDDA7;
width: 40%;
-webkit-transform: translateX(-50%);
transform: translateX(-50%);


@media(max-width: 900px) {
    width: 60%;
}

@media(max-width: 600px) {
    width: 80%;
}

@media(max-width: 450px) {
    width: 95%;
}
`

const CompanyTitle = styled.div`
margin: 0 auto;
margin-top: 3%;
font-weight: bold;
font-size: 2rem;
color: #3C5A92;
margin-bottom: 10%;
`

const FormWrapper = styled.form`
display: flex;
justify-content: center;
flex-direction: column;
`

const LoginInput = styled.input`
width: 65%;
margin: 0 auto;
margin-top: 6%;
padding: 1rem 0;
background-color: white;
border: .1px solid black;

&::placeholder {
    color: #3C5A92;
    font-size: 1.2rem;
    font-weight: 600;
}

@media (max-width: 450px) {
    font-size: 1.1rem;
    &::placeholder {
        font-size: 1.1rem;
    }
}
`

const LoginButton = styled.button`
width: 65%;
margin: 0 auto;
margin-top: 6%;
height: 10vh;
background-color: #C8C9E7;
border: none;
color: #3C5A92;
font-size: 1.8rem;
font-weight: 600;
`

const LoginRedirect = styled.a`
color: #3C5A92;
font-size: 1.4rem;
margin-top: 10%;
text-decoration: none;
font-weight: 600;
padding-bottom: 5%;
`

export const LoginModal = (show) => {
    // Refactor and clean if statement
    const height1 = (window.innerHeight/1.2) + "px";
    let loginBoolean;
    if (show.show === true) {
        loginBoolean = "block"
    } else if (show.show === false) {
        loginBoolean = "none"
    }
    else return;
    return (
        <LoginModalWrapper style={{display: loginBoolean, height: height1}}>
            <CompanyTitle>
                EduTrack
            </CompanyTitle>
            <FormWrapper>
                <LoginInput type="text" placeholder="Email:"/>
                <LoginInput type="password" placeholder="Password:"/>
                <LoginButton>Log In</LoginButton>
                <LoginRedirect href="#">Don't have an account? Sign Up!</LoginRedirect>
            </FormWrapper>
        </LoginModalWrapper>
    );
};