import styled from 'styled-components';
import githubIcon from '../assets/icons/github.png';

const Project = styled.div`
  font-family: 'Roboto', sans-serif;
  background-color: #000647;
  width: 45%;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;

  h3 {
    text-align: left;
    color: #fff;
    font-size: calc(1.5vw);
    font-weight: 100;
  }

  p {
    color: #fff;
    font-size: calc(.9vw);
    font-weight: 100;
    margin-right: 1%;
  }
  
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const ProjectHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 98%;
  height: 20%;
  justify-content: space-between;
    
  a {
    color: white;
    text-decoration: none;
  }

  img {
    width: 100%;
    height: auto;
  }
  
  a{
    width: 8%;
  }
`;

const ImageContainer = styled.div`
  width: 50%;

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px 0px 0px 10px;
    margin: auto;
  }
`;

const ProjectDescription = styled.div`  
  margin-left: 1%;
  width: 50%;
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

export default function ProjectTemplate({title, description, image, alt, github, tech}) {
  return (
    <Project>
      <Container>
        <ImageContainer>
          <img src={image} alt={alt}/>
        </ImageContainer>
        <ProjectDescription>
          <ProjectHeader>
            <h3>{title}</h3>
            {github && <a href={github} target="_blank"><img src={githubIcon} alt="github"/></a>}
          </ProjectHeader>
          <p>{description}</p>
          <ProjectTechContainer>
            {tech.map((t, index) => <ProjectTech key={index}>{t}</ProjectTech>)}
          </ProjectTechContainer>
        </ProjectDescription>
      </Container>
    </Project>
  );
}