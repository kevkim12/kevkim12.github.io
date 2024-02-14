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
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
`

const NavbarButton = styled.button`

`

const LogoContainer = styled.div`
  font: 1.5em 'Roboto', sans-serif;
`

function Navbar() {
  return (
    <NavbarFrame>
      <LogoContainer>
        <h1>Kevin Kim</h1>
      </LogoContainer>
        <NavbarButtons>
          <li><NavbarButton>Home</NavbarButton></li>
          <li><NavbarButton>About</NavbarButton></li>
          <li><NavbarButton>Projects</NavbarButton></li>
          <li><NavbarButton>Contact</NavbarButton></li>
        </NavbarButtons>
      </NavbarFrame>
  )
}

export default Navbar