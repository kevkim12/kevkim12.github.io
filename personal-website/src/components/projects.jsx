import styled from 'styled-components'

import nightfall from '../assets/projects/Nightfall.png'

const Container = styled.div`
  background-color: #a3a3a3;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20%;
`;

const ProjectContainer = styled.div`
  margin-top: 5%;
  background-color: #880808;
  height: 80%;
`;

const Project = styled.div`
  font-family: 'Roboto', sans-serif;
  background-color: #101461;
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  
  img {
    max-width: 95%;
    height: 100%;
    border-radius: 10px;
    margin: auto;
  }

  h3 {
    text-align: left;
    color: #fff;
    font-size: calc(1.5vw);
    font-weight: 800;
    margin-left: 3%;
  }

  p {
    color: #fff;
    margin-left: 3%;
  }
`;

const ProjectDescription = styled.div`

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
              <h3>Nightfall</h3>
              <p>
                Nightfall is a shooter game operated on a round-based system where players must eliminate
                entities designated as the Infected. Players must either survive or complete objectives by
                killing the zombies or satisfying missions. However, there are many different zombie classes
                which can drastically change gameplay
              </p>
            </ProjectDescription>
          </Project>
        </ProjectContainer>

      </Container>
      
    </>
  );
}

export default Projects;