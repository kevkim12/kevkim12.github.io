import styled from 'styled-components'
import picture from '../assets/pfp.jpeg'

const Introduction = styled.div`
  display: flex;
  flex-direction: row;
  place-content: center;
  align-items: center;
  justify-content: center;
  height: 80vh;
  gap: 5vw;
`

const PictureContainer = styled.div`
  position: relative;
  width: 20%;
  height: auto;
  border-radius: 50%;
  border: 2px solid #ce9eff;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Picture = styled.img`
  width: 100%;
  height: auto;
  max-width: 400px;
  border-radius: 50%;
`

const Information = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  max-width: 50vw;
`

const Header = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  font-size: calc(3vw);
`

const Description = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  font-size: calc(2vw);
`

const Fill = styled.div`
  height: 12vh;
`

function Home() {
  return (
    <>
      <Introduction id="home">
        <Information>
          <Header>Hi, I'm Kevin.</Header>
          <Description>I'm a software and game developer based in Boston.</Description>
        </Information>
        <PictureContainer>
          <Picture src={picture} alt="Kevin Kim"></Picture>
        </PictureContainer>
      </Introduction>
      <Fill/>
    </>
  )
}

export default Home