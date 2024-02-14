import styled from 'styled-components'

const NavbarFrame = styled.nav`
  display: flex;
  flex-direction: row;
  background-color: #f2f2f2;
  margin: 0;

  ul {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
`

const NavbarButtons = styled.ul`
  background-color: #fff;
`

const LogoContainer = styled.div`
  background-color: #000;
`

function Navbar() {
  return (
    <NavbarFrame>
      <LogoContainer>
        <h1>Kevin Kim</h1>
      </LogoContainer>
        <NavbarButtons>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </NavbarButtons>
      </NavbarFrame>
  )
}

export default Navbar