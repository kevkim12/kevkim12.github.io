import styled from 'styled-components'

import python from '../assets/skills/python.png';

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
  cursor: pointer;

  transition: color 0.3s, background-color 0.3s;

  &:hover {
    background-color: #11156d;
  }

  &:active {
    background-color: #0f1360;
  }
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
  cursor: pointer;

  transition: color 0.3s, background-color 0.3s;
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
  cursor: pointer;

  transition: color 0.3s, background-color 0.3s;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
`;

const Experience = styled.div`
  background-color: red;
`;

const Skills = styled.div`
  margin-top: 2%;
  display: none;
  width: 100%;
`;

const Education = styled.div`
  display: none;
  background-color: red;
`;

const LanguageSection = styled.div`

`;

const SkillItem = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fff;
  width: 30%;

  img {
    width: 100%;

`;

function About() {
  let selection = "experience";

  function changeDisplay(selection) {
    const experienceButton = document.getElementById("experience_button");
    const skillsButton = document.getElementById("skills_button");
    const educationButton = document.getElementById("education_button");
    if (selection === "experience") {
      document.getElementById("experience").style.display = "block";
      document.getElementById("skills").style.display = "none";
      document.getElementById("education").style.display = "none";
      experienceButton.style.backgroundColor = "#0f1360";
      skillsButton.style.backgroundColor = "#151030";
      educationButton.style.backgroundColor = "#151030";
      selection = "experience";
    } else if (selection === "skills") {
      document.getElementById("experience").style.display = "none";
      document.getElementById("skills").style.display = "block";
      document.getElementById("education").style.display = "none";
      experienceButton.style.backgroundColor = "#151030";
      skillsButton.style.backgroundColor = "#0f1360";
      educationButton.style.backgroundColor = "#151030";
      selection = "skills";
    } else if (selection === "education") {
      document.getElementById("experience").style.display = "none";
      document.getElementById("skills").style.display = "none";
      document.getElementById("education").style.display = "block";
      experienceButton.style.backgroundColor = "#151030";
      skillsButton.style.backgroundColor = "#151030";
      educationButton.style.backgroundColor = "#0f1360";
      selection = "education";
    }
  };
  
  return (
    <>
      <Container id="about">
        <AboutContainer>
          <h1>About</h1>
          <SectionButtons>
            <ExperienceButton id="experience_button" onClick={() => changeDisplay("experience")}>Experience</ExperienceButton>
            <SkillsButton id="skills_button" onClick={() => changeDisplay("skills")}>Skills</SkillsButton>
            <EducationButton id="education_button" onClick={() => changeDisplay("education")}>Education</EducationButton>
          </SectionButtons>
          <Content>
            <Experience id="experience">
              <h3>Experience</h3>
            </Experience>
            <Skills id="skills">
              <div>
                <h3>Languages</h3>
                <LanguageSection>
                  <table>
                    <tr>
                      <SkillItem>
                        <img src={python} alt="Python" />
                      </SkillItem>
                    </tr>
                  </table>
                </LanguageSection>
                <h3>Frameworks</h3>
                
                <h3>Tools</h3>

              </div>
            </Skills>
            <Education id="education">
              <h3>Education</h3>
            </Education>
          </Content>
        </AboutContainer>
      </Container>
    </>
  );
}

export default About;