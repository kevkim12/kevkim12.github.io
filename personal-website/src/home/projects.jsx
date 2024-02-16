import styled from 'styled-components'

import nightfall from '../assets/projects/Nightfall.png'
import safeflight from '../assets/projects/SafeFlight.png'
import Project from '../components/project'

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

function Projects() {
  return (
    <>
      <Container id="projects">
        <ProjectContainer>
          <Project
            title="Nightfall"
            description="Nightfall is a shooter game operated on a round-based system where players must eliminate
            entities designated as the Infected. Players must either survive or complete objectives by
            killing the zombies or satisfying missions. However, there are many different zombie classes
            which can drastically change gameplay"
            image={nightfall}
            alt="Nightfall"
            github="https://github.com/kevkim12/nightfall-video-game"
            tech={["Lua", "Rojo", "Roblox Studio"]}
          />
          <Project
            title="Safe Flight"
            description="Safe Flight is a website that is capable of telling whether a location is safe to travel
            or not. Every country and continent is rated on a scale (from low risk to extremely high risk). It's
            safety score is calculated with the usage of various APIs including the AirLabs and Travel Advisory API."
            image={safeflight}
            alt="Safe Flight"
            github="https://github.com/kevkim12/safe-flight-website"
            tech={["React", "Flask", "JavaScript", "Python", "HTML/CSS"]}
          />
        </ProjectContainer>

      </Container>
      
    </>
  );
}

export default Projects;