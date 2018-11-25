import React, { Component } from 'react'
import axios from 'axios'
import moment from 'moment'

export default class ChatBox extends Component {

    constructor(props) {
        super(props)
        this.state = {
            'message': ''
        }

    }

    handleChange(e) {
        this.setState({
            'message': e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        var msg = this.state.message;
        if (msg != '') {
            this.setState({
                'message': ''
            })
            axios.post('/messages', { message: msg })
                .catch((error) => {
                    console.log(error.response)
                })
            this.props.handleMessage(msg, moment.now())
        } else {

        }
    }

    render() {
        return (
            <div className="chat-box">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" value={this.state.message} onChange={this.handleChange.bind(this)} className="form-control chat-input" />
                    <button type='submit' className="send-btn">SEND</button>
                </form>
            </div>
        )
    }
}
