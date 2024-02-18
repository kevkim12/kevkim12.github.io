import styled from 'styled-components'

const Container = styled.div`
  background-color: #000322;
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

const AboutContainer = styled.div`
  margin-top: 5%;
  width: 50%;
  height: 50%;
`;

function About() {
  return (
    <>
      <Container id="about">
        <AboutContainer>
          <h1>About</h1>
          <h3>In development!</h3>
        </AboutContainer>

      </Container>
    </>
  );
}

export default About;