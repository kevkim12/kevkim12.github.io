import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const NavbarFrame = styled.nav`
  display: flex;
  flex-direction: row;
  margin: 0;
  width: 100%;
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);

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
  color: #474747;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  font-size: 1.2em;

  transition: color 0.3s, background-color 0.3s;
  background-image: linear-gradient(120deg, transparent 0%, transparent 50%, #ce9eff 50%, #ce9eff 100%);
  -webkit-background-clip: text;
  background-clip: text;

  &:hover {
    color: #ce9eff;
    background-position: 100%; /* Move gradient position when hovering */
  }
`

const NameLogo = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  font-size: 1.7em;
  color: #474747;
  margin-left: 20px;
`

function Navbar() {
  return (
    <NavbarFrame>
        <NameLogo>Kevin Kim</NameLogo>
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