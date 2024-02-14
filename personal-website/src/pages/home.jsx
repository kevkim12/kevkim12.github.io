import styled from 'styled-components'
import picture from '../assets/pfp.jpeg'

const Introduction = styled.div`
  display: flex;
  flex-direction: row;
  place-content: center;
  align-items: center;
  height: 80vh;
  gap: 5vw;
`

const PictureContainer = styled.div`
  width: 440px;
  height: 440px;
  border-radius: 50%;
  border: 2px solid #d6d6d6;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Picture = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 50%;
`

const Information = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: 30vh;
`

const Header = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  font-size: 4em;
`

const Description = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  font-size: 2em;
`

function Home() {
  return (
    <Introduction>
      <Information>
        <Header>Hi, I'm Kevin.</Header>
        <Description>I'm a software and game developer based in Boston.</Description>
      </Information>
      <PictureContainer>
        <Picture src={picture} alt="Kevin Kim"></Picture>
      </PictureContainer>
      
    </Introduction>
  )
}

export default Home