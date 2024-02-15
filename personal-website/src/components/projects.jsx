import styled from 'styled-components'

import nightfall from '../assets/projects/Nightfall.png'
import { VscGithub } from "react-icons/vsc";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20%;
`;

const ProjectContainer = styled.div`
  margin-top: 5%;
  height: auto;
`;

const Project = styled.div`
  font-family: 'Roboto', sans-serif;
  background-color: #a3a3a3;
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;
  
  img {
    max-width: 100%;
    height: 100%;
    border-radius: 10px 0px 0px 10px;
    margin: auto;
  }

  h3 {
    text-align: left;
    color: #fff;
    font-size: calc(1.5vw);
    font-weight: 800;
  }

  p {
    color: #fff;
    font-size: calc(.9vw);
    font-weight: 400;
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ProjectDescription = styled.div`  
  margin-left: 1%;
`;

const ProjectTechContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ProjectTech = styled.div`
  color: #fff;
  border: 1px solid #fff;
  border-radius: 5px;
  padding: 2px;
  font-size: calc(.8vw);
  margin-right: 1%;
`;

function Projects() {
  return (
    <>
      <Container id="projects">
        <ProjectContainer>
          <Project>
            <div>
              <img src={nightfall} alt="Nightfall"/>
            </div>
            <ProjectDescription>
              <ProjectHeader>
                <h3>Nightfall</h3>
                <a href="https://github.com/kevkim12/nightfall-video-game" target="_blank"><VscGithub size={25}/></a>
              </ProjectHeader>
              <p>
                Nightfall is a shooter game operated on a round-based system where players must eliminate
                entities designated as the Infected. Players must either survive or complete objectives by
                killing the zombies or satisfying missions. However, there are many different zombie classes
                which can drastically change gameplay
              </p>
              <ProjectTechContainer>
                <ProjectTech>Lua</ProjectTech>
                <ProjectTech>Rojo</ProjectTech>
                <ProjectTech>Roblox Studio</ProjectTech>
              </ProjectTechContainer>
            </ProjectDescription>
          </Project>
        </ProjectContainer>

      </Container>
      
    </>
  );
}

export default Projects;