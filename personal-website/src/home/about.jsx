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
`;

const ExperienceButton = styled.button`
  color: white;
  background-color: #0f1360;
`;

const EducationButton = styled.button`
  color: white;
  background-color: #151030;
`;

const SkillsButton = styled.button`
  color: white;
  background-color: #151030;
`;

const Content = styled.div`
  display: flex;
`;

function About() {
  return (
    <>
      <Container id="about">
        <AboutContainer>
          <h1>About</h1>
          <SectionButtons>
            <ExperienceButton>Experience</ExperienceButton>
            <EducationButton>Education</EducationButton>
            <SkillsButton>Skills</SkillsButton>
          </SectionButtons>
          <Content>
            
          </Content>
        </AboutContainer>
      </Container>
    </>
  );
}

export default About;