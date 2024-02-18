import styled from 'styled-components'

import deadx from '../assets/projects/DeadX.png'
import nightfall from '../assets/projects/Nightfall.png'
import safeflight from '../assets/projects/SafeFlight.png'
import photoshare from '../assets/projects/PhotoShare.png'
import portfolio from '../assets/projects/Portfolio.png'
import Project from '../components/project'

const Container = styled.div`
  height: auto;
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
        <h1>Projects</h1>
        <Project
            title="DeadX (In Development)"
            description="DeadX is a revamp of Nightfall that will have more content and a better user experience.
            In addition, the code is implemented with better practices and is more organized. I intend to release
            this version to the public."
            image={deadx}
            alt="DeadX"
            tech={["Rojo", "Roblox Studio", "Lua"]}
          />
          <Project
            title="Nightfall"
            description="Nightfall is a shooter game operated on a round-based system where players must eliminate
            entities designated as the Infected. Players must either survive or complete objectives by
            killing the zombies or satisfying missions. However, there are many different zombie classes
            which can drastically change gameplay."
            image={nightfall}
            alt="Nightfall"
            github="https://github.com/kevkim12/nightfall-video-game"
            tech={["Rojo", "Roblox Studio", "Lua"]}
          />
          <Project
            title="PhotoShare"
            description="PhotoShare is a web-based application that allows users to create photo albums, upload photos,
            tag them, and share them with friends. Users can browse photos and albums, search for specific photos or
            albums, and leave comments on them. The app also allows users to like photos and view the most popular tags
            associated with them."
            image={photoshare}
            alt="PhotoShare"
            github="https://github.com/kevkim12/photo-sharing-website"
            tech={["Flask", "MySQL", "JavaScript", "Python", "HTML/CSS"]}
          />
          <Project
            title="Safe Flight"
            description="Safe Flight is a website that is capable of telling whether a location is safe to travel
            or not. Every country and continent is rated on a scale (from low risk to extremely high risk). It's
            safety score is calculated with the usage of various APIs including the AirLabs and Travel Advisory API."
            image={safeflight}
            alt="Safe Flight"
            github="https://github.com/kevkim12/safe-flight-website"
            tech={["React", "Flask", "MongoDB", "JavaScript", "Python", "HTML/CSS"]}
          />
          <Project
            title="Personal Portfolio"
            description="This website is my personal portfolio! It displays my projects, skills, and contact 
            information. You can view more about each project by clicking on the thumbnails (to be implemented). This portfolio will
            be updated as I continue to work on more projects and learn new skills."
            image={portfolio}
            alt="Personal Portfolio"
            github="https://github.com/kevkim12/portfolio"
            tech={["React", "Vite", "JavaScript", "HTML/CSS"]}
          />
        </ProjectContainer>

      </Container>
      
    </>
  );
}

export default Projects;