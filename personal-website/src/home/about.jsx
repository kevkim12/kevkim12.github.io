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

const SectionButtons = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  justify-content: center;
  text-align: center;
  
`;

const ExperienceButton = styled.button`
  color: white;
  background-color: #0f1360;
  border-radius: 8px 0 0 8px;
  border-style: none;
  width: 15%;
  text-align: center;
  padding: 2%;
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  font-size: 1vw;
`;

const EducationButton = styled.button`
  color: white;
  background-color: #151030;
  border-style: none;
  width: 15%;
  text-align: center;
  padding: 2%;
  border-radius: 0 8px 8px 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  font-size: 1vw;
`;

const SkillsButton = styled.button`
  color: white;
  background-color: #151030;
 
  border-style: none;
  width: 15%;
  text-align: center;
  padding: 2%;
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  font-size: 1vw;
`;

const Content = styled.div`
  display: flex;
`;

function About() {
  let selection = "experience";
  
  return (
    <>
      <Container id="about">
        <AboutContainer>
          <h1>About</h1>
          <SectionButtons>
            <ExperienceButton>Experience</ExperienceButton>
            <SkillsButton>Skills</SkillsButton>
            <EducationButton>Education</EducationButton>
          </SectionButtons>
          <Content>

          </Content>
        </AboutContainer>
      </Container>
    </>
  );
}

export default About;