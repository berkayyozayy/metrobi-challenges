import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


function NavBar() {
    return (
        <div>
            <Navbar color="light">
                <NavbarBrand>Metrobi Challenges</NavbarBrand>
                <Nav>
                    <NavItem>
                        <NavLink href="/question1">
                            <Link to="/question1">Question 1</Link>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>
                            <Link to="/question2">Question 2</Link>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>
                            <Link to="/question3">Question 3</Link>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>
                            <Link to="/question4">Question 4</Link>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>
                            <Link to="github">Project Files</Link>
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>

        </div>
    )
}


export default NavBar;