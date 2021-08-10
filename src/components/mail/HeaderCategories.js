import './headerCategories.css'

import React, { Component } from 'react'
import BlockCategory from './BlockCategory'

export default class HeaderCategories extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             activeCategory : "Несортированные"
        }
    }
    
    render() {
        return (
            <div className="header__categories">
                <BlockCategory name="Несортированные" />
                <BlockCategory name="Соцсети" />
                <BlockCategory name="Промоакции" />
            </div>
        )
    }
}
