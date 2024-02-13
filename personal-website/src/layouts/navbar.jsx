import styled from 'styled-components'

const NavbarFrame = styled.nav`
  display: flex;
  flex-direction: row;
  background-color: #f2f2f2;
  width: 100vw;

  ul {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
`

function Navbar() {
  return (
    <NavbarFrame>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </NavbarFrame>
  )
}

export default Navbar