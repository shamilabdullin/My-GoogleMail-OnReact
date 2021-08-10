import './leftMenu.css'
import LeftMenuItem from './LeftMenuItem'

import React, { Component } from 'react'

export default class LeftMenu extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className="left__menu">
                <div className="left__menu__items">
                    <LeftMenuItem name="Входящие"/>
                    <LeftMenuItem name="Помеченные"/>
                    <LeftMenuItem name="Отложенные"/>
                    <LeftMenuItem name="Важные"/>
                    <LeftMenuItem name="Отправленные"/>
                    <LeftMenuItem name="Черновики"/>
                    <LeftMenuItem name="Категории"/>
                </div>
            </div>
        )
    }
}
