import React from 'react'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

const NavbarComponent = () => {
    return (
        <Navbar
            sticky='top'
            bg='transparent' 
            expanded='sm'>
            <Container>
                <Navbar.Brand className='text-black '>Finmod.Id</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ms-auto'>
                        <Nav.Link className='text-black' href='#'>Home</Nav.Link>
                        <Nav.Link className='text-black' href='#'>About</Nav.Link>
                        <Nav.Link className='text-black' href='#'>Pricing</Nav.Link>
                        <Button
                            variant="outline-light"
                            className='ms-2 text-dark'
                            size='sm'
                            style={{
                                borderRadius: '20px',
                                borderWidth: '2px',
                                width: '100px',
                                padding: '8px'                                
                            }}
                        >
                            Sign In
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent