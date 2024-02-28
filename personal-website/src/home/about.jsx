import styled from 'styled-components'

import c from '../assets/skills/c.png';
import css3 from '../assets/skills/css3.png';
import go from '../assets/skills/go.png';
import html5 from '../assets/skills/html5.png';
import java from '../assets/skills/java.png';
import javascript from '../assets/skills/javascript.png';
import lua from '../assets/skills/lua.png';
import matlab from '../assets/skills/matlab.png';
import ocaml from '../assets/skills/ocaml.png';
import python from '../assets/skills/python.png';
import sql from '../assets/skills/sql.png';

import flask from '../assets/skills/flask.png';
import react from '../assets/skills/react.png';
import rojo from '../assets/skills/rojo.png';

import docker from '../assets/skills/docker.png';
import git from '../assets/skills/git.png';
import mongodb from '../assets/skills/mongodb.png';
import mysql from '../assets/skills/mysql.png';
import robloxstudio from '../assets/skills/robloxstudio.png';

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
    font-size: 1.2vw;
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

const Section = styled.table`
  margin: auto;

`;

const SkillItem = styled.td`
  text-align: center;
  max-height: 80px;
  max-width: 80px;
  background-color: #151030;

  img {
    margin-top: 20%;
    max-width: 50%;
    height: 50%;
  }

  strong {
    display: block;
    margin-top: 0.5em;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: .7vw;
    color: #fff;
    margin-bottom: 0.5em;
  }
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
                <Section>
                  <tr>
                    <SkillItem>
                      <img src={go} alt="Go" />
                      <strong>Go</strong>
                    </SkillItem>
                    <SkillItem>
                      <img src={python} alt="Python" />
                      <strong>Python</strong>
                    </SkillItem>
                    <SkillItem>
                      <img src={javascript} alt="JavaScript" />
                      <strong>JavaScript</strong>
                    </SkillItem>
                    <SkillItem>
                      <img src={java} alt="Java" />
                      <strong>Java</strong>
                    </SkillItem>
                    <SkillItem>
                      <img src={lua} alt="Lua" />
                      <strong>Lua</strong>
                    </SkillItem>
                    <SkillItem>
                      <img src={c} alt="C" />
                      <strong>C</strong>
                    </SkillItem>
                  </tr>
                  <tr>
                    <SkillItem>
                      <img src={ocaml} alt="OCaml" />
                      <strong>OCaml</strong>
                    </SkillItem>
                    <SkillItem>
                      <img src={html5} alt="HTML5" />
                      <strong>HTML5</strong>
                    </SkillItem>
                    <SkillItem>
                      <img src={css3} alt="CSS3" />
                      <strong>CSS3</strong>
                    </SkillItem>
                    <SkillItem>
                      <img src={matlab} alt="MATLAB" />
                      <strong>MATLAB</strong>
                    </SkillItem>
                    <SkillItem>
                      <img src={sql} alt="SQL" />
                      <strong>SQL</strong>
                    </SkillItem>
                  </tr>
                </Section>
                <h3>Frameworks</h3>
                <Section>
                  <tr>
                    <SkillItem>
                      <img src={react} alt="React" />
                      <strong>React</strong>
                    </SkillItem>
                    <SkillItem>
                      <img src={flask} alt="Flask" />
                      <strong>Flask</strong>
                    </SkillItem>
                    <SkillItem>
                      <img src={rojo} alt="Rojo" />
                      <strong>Rojo</strong>
                    </SkillItem>
                  </tr>
                </Section>

                <h3>Tools</h3>
                <Section>
                  <tr>
                    <SkillItem>
                      <img src={docker} alt="Docker" />
                      <strong>Docker</strong>
                    </SkillItem>
                    <SkillItem>
                      <img src={git} alt="Git" />
                      <strong>Git</strong>
                    </SkillItem>
                    <SkillItem>
                      <img src={mysql} alt="MySQL" />
                      <strong>MySQL</strong>
                    </SkillItem>
                    <SkillItem>
                      <img src={mongodb} alt="MongoDB" />
                      <strong>MongoDB</strong>
                    </SkillItem>
                    <SkillItem>
                      <img src={robloxstudio} alt="Roblox Studio" />
                      <strong>Roblox Studio</strong>
                    </SkillItem>
                  </tr>
                </Section>
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