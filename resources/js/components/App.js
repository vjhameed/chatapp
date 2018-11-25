import React, {
    Component
} from 'react';
import ReactDOM from 'react-dom';
import ChatHeader from './ChatHeader'
import ChatBox from './ChatBox'
import ChatContainer from './ChatContainer'
import axios from 'axios'

export default class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            'messages': [],
            'user': '',
        }

        window.Echo.private('chat')
            .listen('MessageSent', (e) => {
                this.setState((prevState) => ({
                    'messages': [...prevState.messages, { 'message': e.message.message, 'date': e.message.created_at, 'user': e.user.name }]
                }))
            });
    }

    componentWillMount() {
        axios.get('/api/user')
            .then((resp) => {
                this.setState({
                    'user': resp.data
                })
            })
            .catch((error) => {
                console.log(error.response)
            })

        axios.get('/messages')
            .then((resp) => {
                resp.data.map(e => {
                    this.setState((prevState) => ({
                        'messages': [...prevState.messages, { 'message': e.message, 'date': e.created_at, 'user': e.user.name }]
                    }))
                }).bind(this)
            })
            .catch((error) => {
                console.log(error.response)
            })

    }

    sendMessage(val, date) {
        this.setState((prevState) => ({
            'messages': [...prevState.messages, { 'message': val, 'user': prevState.user, 'date': date }]
        }))
    }

    render() {
        return (
            <div className="body-container">
                <section className="chat-module">
                    <ChatHeader />
                    <ChatContainer messages={this.state.messages} />
                    <ChatBox handleMessage={this.sendMessage.bind(this)} />
                </section>
            </div>
        );
    }
}

if (document.getElementById('main')) {
    ReactDOM.render(<App />, document.getElementById('main'));
}
