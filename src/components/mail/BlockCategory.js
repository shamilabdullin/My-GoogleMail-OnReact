import './blockCategory.css'
import socialNetworkIcon from '../../img/social-network-icon.png'

import React from 'react'

export default function BlockCategory(props) {
    return (
        <div className="block__category">
            <p><img width="16px" height="16px" src={socialNetworkIcon} /> {props.name}</p>
        </div>
    )
}
