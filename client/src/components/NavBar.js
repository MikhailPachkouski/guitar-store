import React, { useContext } from 'react'
import {Context} from '../index'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';

const NavBar = () => {
	const {user} = useContext(Context)
	return (
		<>
			<Navbar bg="dark" variant="dark">
        <Container>
				<NavLink style={{color: "green"}} to={SHOP_ROUTE}>Guitar Store</NavLink>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="ml-auto" style={{color: "white"}}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
		</>
	)
}

export default NavBar