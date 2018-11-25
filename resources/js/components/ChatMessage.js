import React, { Component } from 'react'
import TimeAgo from 'timeago-react';
import moment from 'moment'

export default class ChatMessage extends Component {

    scrollToBottom() {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }

    componentDidMount() {
        this.scrollToBottom();
        // var time = new Date(this.props.date)
    }

    showTime() {
        var date = moment.utc(this.props.date)
        var changed = moment(date).local()
        return changed.toDate()
    }


    render() {
        return (
            <li className="conversation" >
                <div className="avatar">
                    <img src="img/others1.jpg" alt="" className="user-img" />
                    <div className="user-level">21</div>
                </div>
                <div className="message">
                    <TimeAgo className='timeago'
                        datetime={this.showTime()} />
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
