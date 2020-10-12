import React from 'react'
import { Navbar, Container, Button, FormControl, Nav, Form, NavDropdown } from 'react-bootstrap';
import '../../App.css';
// import Navbar from 'react-bootstrap/Navbar';
import Header from "../partials/header"

function Partials() {
    return (

        <div className="App-partials">
            <Header />
            {/* <Container> */}
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">VART</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="../Project">가상자산</Nav.Link>
                    <Nav.Link href="../Service">서비스</Nav.Link>
                    <Nav.Link href="../About">소개</Nav.Link>
                    <Nav.Link href="../Announcement">공지사항</Nav.Link>
                    <Nav.Link href="fag">고객센터</Nav.Link>
                    <Nav.Link href="../projectItemCreate">공시등록</Nav.Link>
                    <Nav.Link href="../projectItemList">공시리스트</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
            {/* ================================================================== */}

            {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="App-partials">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar> */}
            {/* </Container> */}

        </div>
    )
}

export default Partials;


// 상단메뉴
// 적용링크 예시
// import Partials from './partials/Partials'