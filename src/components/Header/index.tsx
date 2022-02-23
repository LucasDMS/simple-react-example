import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Schedule</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Item as={Link} className="nav-link" to ="/">Home</Nav.Item>
                    <Nav.Item as={Link} className="nav-link" to ="/tasks">Tasks</Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Home;