import React, { Component } from 'react'
import ChatMessage from './ChatMessage'

export default class ChatContainer extends Component {
    constructor(props) {
        super(props)
    }

    returnMsgs() {
        return this.props.messages.map((msg, index) => {
            return <ChatMessage message={msg.message} user={msg.user} date={msg.date} key={index} />
        })
    }

    render() {
        return (
            <div className="tab-one">
                <ul className="conversations-list">
                    {this.returnMsgs()}
                </ul>
            </div>
        )
    }
}
