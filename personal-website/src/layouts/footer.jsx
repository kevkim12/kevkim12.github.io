import styled from 'styled-components';
import githubIcon from '../assets/icons/github.png';
import linkedinIcon from '../assets/icons/linkedin.png';

const Container = styled.div`
  height: 22vh;
  background-color: #00021a;
`;

const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  width: 8%;

  a {
    margin-top: 10%;
    width: 40%;

    transition: opacity 0.3s;
  }

  a:hover {
    opacity: 0.7;
  }

  img {
    width: 100%;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  width: 10%;

  h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6vw;
    font-weight: 100;
    color: #fff;
  }
`;

function Footer() {
  return(
    <Container>
      <HeaderContainer>
        <h1>Links</h1>
      </HeaderContainer>
      <SocialContainer>
        <a href="https://github.com/kevkim12" target="_blank" ><img src={githubIcon} alt="Github" /></a>
        <a href="https://www.linkedin.com/in/kevkim2001/" target="_blank" ><img src={linkedinIcon} alt="LinkedIn" /></a>
      </SocialContainer>
    </Container>
  );
}

export default Footer