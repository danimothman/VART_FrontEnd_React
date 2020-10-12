import React from 'react'
import { Navbar, Button, FormControl, Nav, Form } from 'react-bootstrap';
import '../../App.css';



function Partials() {
    return (
        <div className="App-partials">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">VART</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="../Project">가상자산</Nav.Link>
                    <Nav.Link href="../Service">서비스</Nav.Link>
                    <Nav.Link href="../About">소개</Nav.Link>
                    <Nav.Link href="../Announcement">공지사항</Nav.Link>
                    {/* <Nav.Link href="fag">고객센터</Nav.Link> */}
                    <Nav.Link href="../projectItemCreate">공시등록</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        </div>
    )
}

export default Partials;


// 상단메뉴
// 적용링크 예시
// import Partials from './partials/Partials'