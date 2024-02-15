import styled from 'styled-components'

const Container = styled.div`
  background-color: #000322;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProjectContainer = styled.div`
  background-color: #fff;
  width: 80%;
`;

const Project = styled.div`

`;

function Projects() {
  return (
    <>
      <Container id="projects">
        <ProjectContainer>
          <p>hi

          </p>
        </ProjectContainer>

      </Container>
      
    </>
  );
}

export default Projects;