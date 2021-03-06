import React from 'react'
import { Navbar, Container, Button, FormControl, Nav, Form, NavDropdown } from 'react-bootstrap';
import '../../App.css';
// import Navbar from 'react-bootstrap/Navbar';

function Partials() {
    return (

        <div>
            {/* <Container> */}
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">VART</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="App-partials">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <NavDropdown title="가상자산" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="../Project">가상자산</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="../projectItemCreate">공시등록_Test</NavDropdown.Item>
                            <NavDropdown.Item href="../ProjectItem">공시상세페이지_Test</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="../Service">서비스</Nav.Link>
                        <NavDropdown title="고객센터" id="collasible-nav-dropdown2">
                            <NavDropdown.Item href="../Announcement">공지사항</NavDropdown.Item>
                            <NavDropdown.Item href="../About">소개</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="../Faq">고객센터</NavDropdown.Item>
                        </NavDropdown>

                    </Nav>

                    <Nav>
                        <Nav.Link href="../CompanyLogin">로그인</Nav.Link>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-info">Search</Button>
                        </Form>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>


        </div>
    )
}

export default Partials;


// 상단메뉴
// 적용링크 예시
// import Partials from './partials/Partials'