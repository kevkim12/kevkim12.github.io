import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
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
  width: 45%;
  padding: 1%;
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
  margin: auto;
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
`;

function Contact() {
  function resetForm() {
    document.getElementById("nameInput").value = "";
    document.getElementById("emailInput").value = "";
    document.getElementById("messageInput").value = "";
  }

  return (
    <Container id="contact">
      <ContactContainer>
        <h1>Contact</h1>
        <ContactForm>
          <TopForm>
            <InfoInput1 id="nameInput" type="text" placeholder="Name" />
            <InfoInput1 id="emailInput" type="text" placeholder="Email" />
          </TopForm>
          <InfoInput2 id="messageInput" type="text" placeholder="Message" />
          <ButtonContainer>
            <SubmitButton type="button">Submit</SubmitButton>
            <ResetButton type="button" onClick={resetForm} >Reset</ResetButton>
          </ButtonContainer>
        </ContactForm>
      </ContactContainer>
    </Container>
  );
}

export default Contact;