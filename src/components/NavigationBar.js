import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';


class NavigationBar extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Link to={""} className="navbar-brand">
                    <Navbar.Brand href="/">Ewidencja sal</Navbar.Brand>
                </Link>
                <Nav className="mr-auto">
                    <Link to={"add"} className="nav-link">Dodaj salę</Link>
                    <Link to={"list"} className="nav-link">Lista sal</Link>
                </Nav>
            </Navbar>
        );
    }

}

export default NavigationBar;
