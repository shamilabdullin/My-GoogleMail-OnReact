import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import './header.css'
import logo from '../img/logo-gmail.png'

export default function Header() {
    return (
        <Navbar bg="light" variant="light" className="navbar ml-auto" fixed="top">
            <img src={logo} width="30" height="30"/>
            <Navbar.Brand href="#home" className="gmail">Gmail</Navbar.Brand>
            <Nav className="mr-auto">
                
            </Nav>
            <Form> 
                <Nav className="mr-auto header__menu">
                    <Nav.Link href="#home">Для бизнеса</Nav.Link>
                    <Nav.Link href="mail">Войти</Nav.Link>
                    <Nav.Link href="#pricing"><Button size="lg">Создать аккаунт</Button></Nav.Link>
                </Nav>
            </Form>
        </Navbar>
    )
}
