import './letter.css'
import React, { Component } from 'react'
import starIcon from '../../img/starIcon.png'

export default class Letter extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            sender : props.sender,
            title : props.title,
            body : props.body,
            date : props.date,
            tagged : false
        }
    }
    

    render() {
        return (
            <div className="letter">
                <div className="letter__sender">
                    <div className="letter__chosen"><img width="20px" height="20px" src={starIcon} /></div>
                    <div className="letter__marked"><img width="20px" height="20px" src={starIcon} /></div>
                    <div className="letter__important"><img width="20px" height="20px" src={starIcon} /></div>
                    <div className="letter__sender__text">
                        {this.state.sender}
                    </div>
                </div>
                <div className="letter__content">
                    <span className="letter__title">{this.state.title} -&nbsp;</span>
                    <span className="letter__body">{this.state.body}</span>
                </div>
                <div className="letter__date">{this.state.date.toLocaleDateString()}</div>
            </div>
        )
    }
}
