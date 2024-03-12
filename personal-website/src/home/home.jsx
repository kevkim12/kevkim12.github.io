import React, { useEffect } from 'react';
import styled from 'styled-components';
import picture from '../assets/pfp.jpeg';
import background from '../assets/backgrounds/wave.png';
import { SlLocationPin } from "react-icons/sl";


const Background = styled.div`
  background-image: url(${background});
  background-size: cover;
  height: 120vh;
  opacity: 0;
  animation: fadeIn 4s ease forwards;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Introduction = styled.div`
  display: flex;
  flex-direction: col;
  place-content: center;
  align-items: center;
  justify-content: center;
  height: 80vh;
  gap: 5vw;
`;

const PictureContainer = styled.div`
  position: relative;
  width: 20%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Picture = styled.img`
  width: 100%;
  height: auto;
  max-width: 400px;
  border-radius: 50%;
`;

const Information = styled.div`
  max-width: 650px;

  h3 {
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    font-size: 1.5em;
  
  }
`;

const Header = styled.h1`
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-weight: 800;
  font-size: 3.5em;
  opacity: 0;
  transition: opacity 3s ease;
`;

const Description = styled.p`
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  font-size: 2em;
  opacity: 0;
  transition: opacity 6s ease;
`;

function Home() {
  useEffect(() => {
    const header = document.getElementById('header');
    header.style.opacity = '1';
    const description = document.getElementById('description');
    description.style.opacity = '1';
  }, []);

  return (
    <>
      <Background>
        <Introduction id="home">
          <Information>
            <h3><SlLocationPin style={{color:"white", maxWidth: "100px", maxHeight: "100px"}}/> Boston, MA</h3>
            <Header id="header">Hi, I'm Kevin.</Header>
            <Description id="description">I'm a software and game developer based in Atlanta.</Description>
          </Information>
          <PictureContainer>
            <Picture src={picture} alt="Kevin Kim"></Picture>
          </PictureContainer>
        </Introduction>
      </Background>
    </>
  );
}

export default Home;