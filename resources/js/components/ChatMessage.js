import React, { Component } from 'react'

export default class ChatMessage extends Component {

    scrollToBottom() {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }

    componentDidMount() {
        this.scrollToBottom();
    }


    render() {
        return (
            <li className="conversation" >
                <div className="avatar">
                    <img src="img/others1.jpg" alt="" className="user-img" />
                    <div className="user-level">21</div>
                </div>
                <div className="message">
                    <time className="timeago" dateTime="{this.props.date}" />
                    <div className="user-name">
                        {this.props.user}
                    </div>
                    <div className="text">
                        {this.props.message}
                    </div>
                </div>
                <div style={{ float: "left", clear: "both" }}
                    ref={(el) => { this.messagesEnd = el; }}>
                </div>
            </li>
        )
    }
}