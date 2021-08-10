import './leftMenuItem.css'
import starIcon from '../../../img/starIcon.png'

import React from 'react'

export default function LeftMenuItem(props) {

    const title = props.name

    return (
        <div className="left__menu__item">
            <img width="20px" height="20px" src={starIcon} />
        </div>
    )
}
