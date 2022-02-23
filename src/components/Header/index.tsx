import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap'

const Home: React.FC = () => {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="/">Tasks</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/tasks">Tasks</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Home;