import React, { useEffect } from 'react';
import styled from 'styled-components';
import picture from '../assets/pfp.jpeg';
import background from '../assets/backgrounds/wave.png';

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
  flex-direction: row;
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
  border-radius: 50%;
  border: 2px solid #410572;
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
  display: flex;
  flex-direction: column;
  width: 50%;
  max-width: 50vw;
`;

const Header = styled.h1`
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  font-size: calc(3vw);
  opacity: 0;
  transition: opacity 3s ease;
`;

const Description = styled.p`
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  font-size: calc(2vw);
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