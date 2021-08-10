import React, { Component } from 'react'
import './mailHeader.css'
import { Form, FormControl, Button, NavDropdown, Nav, Navbar } from 'react-bootstrap'
import navbarLogoBrand from '../../img/navbar-logo-brand.png'
import hamburger from '../../img/hamburger.jpg'
import questionIcon from '../../img/questionIcon.svg.png'
import mechIcon from '../../img/mechIcon.png'
import dotsIcon from '../../img/dotsIcon.png'
import avatar from '../../img/avatar.jpg'

export default class MailHeader extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className="mail__header">
                <Navbar bg="light" expand="lg">
                    <div className="hamburger">
                        <img src={hamburger} height="20px" width="20px"/>
                    </div>
                    <Navbar.Brand href="#"><img src={navbarLogoBrand} /></Navbar.Brand>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Поиск в почте"
                            className="mr-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                        className="ml-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                        >
                        <Nav.Link href="#"><img src={questionIcon} width="20px" height="20px"/></Nav.Link>
                        <Nav.Link href="#"><img src={mechIcon} width="20px" height="20px"/></Nav.Link>
                        <Nav.Link href="#"><img src={dotsIcon} width="18px" height="18px"/></Nav.Link>
                        <Nav.Link href="#"><img src={avatar} width="30px" height="30px"/></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
