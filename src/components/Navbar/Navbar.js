import React from 'react'

import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className='sticky-top'>
            <Navbar bg="info" className='mb-4' variant="dark">
                <Container>
                    <Link className='navbar-brand' exact to="/">Drunk <span className="text-warning">Food</span></Link>
                    <Nav className="d-flex align-items-center justify-center-around">
                        <NavLink className='nav-link' to="/foods">Foods</NavLink>
                        <NavLink className='nav-link' to="/drinks">Dinks</NavLink>
                        <NavLink className='nav-link' to="/pricing">Pricing</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
