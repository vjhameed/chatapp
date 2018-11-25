import React, { Component } from 'react'

export default class ChatHeader extends Component {
    constructor(props) {
        super(props)

        this.state = {
            'players': 0
        }

        window.Echo.private('players')
            .listen('OnlineUser', (e) => {
                this.setState((prevState) => ({
                    'players': prevState.players + 1
                }))
            });

    }

    render() {
        return (
            <div>
                <div className="chat-header">
                    <div className="header-left">
                        <span className="online">ONLINE: </span>
                        <span className="number">{this.state.players}</span>
                    </div>
                    <div className="header-right">
                        RULES & COMMANDS
                </div>
                </div>
                <div className="tabs">
                    <div className="tab active">
                        Chat
                  </div>
                    <div className="tab">
                        Giveaway
                  </div>
                </div>
            </div>
        )
    }
}
