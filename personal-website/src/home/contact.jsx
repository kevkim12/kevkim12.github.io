import styled from 'styled-components';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


import background from '../assets/backgrounds/wave-fade2.png';

const Container = styled.div`
  background-image: url(${background});
  background-size: cover;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20%;

  h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 2vw;
    font-weight: 100;
    color: #fff;
    text-align: center;
  }

  h3 {
    font-family: 'Roboto', sans-serif;
    font-size: 1.5vw;
    font-weight: 100;
    color: #fff;
    text-align: center;
  }
`;

const ContactContainer = styled.div`
  margin-top: 5%;
  width: 50%;
  height: 50%;
  h3 {
    color: #fff;
  }
`;

const ContactForm = styled.form`
  width: 100%;
  padding: 1%;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const TopForm = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4%;
`;

const InfoInput1 = styled.input`
  width: 44%;
  padding: 2%;
  font-size: 1.2vw;

  background-color: #dedede;
  border: solid 1px;
  border-color: #dddddd;
  border-radius: 8px;
  text-decoration: none;

  font-family: 'Roboto', sans-serif;
  font-weight: 100;
`;

const InfoInput2 = styled.textarea`
  flex: 1;
  padding: 1%;
  font-size: 1.2vw;
  resize: none;

  background-color: #dedede;
  border: solid 1px;
  border-color: #dddddd;
  border-radius: 8px;
  text-decoration: none;

  font-family: 'Roboto', sans-serif;
  font-weight: 100;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4%;
  width: 60%;
`;

const SubmitButton = styled.button`
  width: 48%;
  padding: 1%;
  font-size: 1.2vw;
  background-color: #0f1360;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  font-family: 'Roboto', sans-serif;
  font-weight: 100;

  transition: color 0.3s, background-color 0.3s;

  &:hover {
    background-color: #11156d;
  }

  &:active {
    background-color: #0f1360;
  }
`;

const ResetButton = styled.button`
  width: 48%;
  padding: 4%;
  font-size: 1.2vw;
  background-color: #151030;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  font-family: 'Roboto', sans-serif;
  font-weight: 100;

  transition: color 0.3s, background-color 0.3s;

  &:hover {
    background-color: #1b153f;
  }

  &:active {
    background-color: #151030;
  }
`;



function Contact() {
  function resetForm() {
    document.getElementById("nameInput").value = "";
    document.getElementById("emailInput").value = "";
    document.getElementById("messageInput").value = "";
  }

  const form = useRef();

  const sendEmail = (e) => {
    var name = document.getElementById("nameInput").value;
    var email = document.getElementById("emailInput").value;
    var message = document.getElementById("messageInput").value;
    if (name == "" || email == "" || message == "") {
      alert("All fields must be filled out");
      return;
    }

    e.preventDefault();

    // https://www.emailjs.com/docs/faq/is-it-okay-to-expose-my-public-key/
    emailjs.sendForm('service_6gz73qg', 'template_ullp6cn', form.current, 'oArH-jmdfknIp7o-T')
      .then((result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          resetForm();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Container id="contact">
      <ContactContainer>
        <h1>Contact</h1>
        <ContactForm ref={form}>
          <TopForm>
            <InfoInput1 name="user_name" id="nameInput" type="text" placeholder="Name" />
            <InfoInput1 name="user_email" id="emailInput" type="text" placeholder="Email" />
          </TopForm>
          <InfoInput2 name="message" id="messageInput" type="text" placeholder="Enter your message" />
          <ButtonContainer>
            <SubmitButton type="button" onClick={sendEmail} >Submit</SubmitButton>
            <ResetButton type="button" onClick={resetForm} >Reset</ResetButton>
          </ButtonContainer>
        </ContactForm>
      </ContactContainer>
      
    </Container>
  );
}

export default Contact;