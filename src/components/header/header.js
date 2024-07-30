import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            My App
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="nav-link">
              Dashboard
            </Nav.Link>
            <Nav.Link as={Link} to="/user" className="nav-link">
              Post User
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
