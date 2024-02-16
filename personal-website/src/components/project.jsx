import styled from 'styled-components'
import { VscGithub } from "react-icons/vsc";

const Project = styled.div`
  font-family: 'Roboto', sans-serif;
  background-color: #000647;
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
  width: 98%;
  height: 20%;
  justify-content: space-between;
    
  a {
    color: white;
    text-decoration: none;
  }
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

export default function ProjectTemplate({title, description, image, alt, github, tech}) {
  return (
    <Project>
      <div>
        <img src={image} alt={alt}/>
      </div>
      <ProjectDescription>
        <ProjectHeader>
          <h3>{title}</h3>
          {github && <a href={github} target="_blank"><VscGithub size={'2em'}/></a>}
        </ProjectHeader>
        <p>{description}</p>
        <ProjectTechContainer>
          {tech.map((t, index) => <ProjectTech key={index}>{t}</ProjectTech>)}
        </ProjectTechContainer>
      </ProjectDescription>  
    </Project>
  );
}