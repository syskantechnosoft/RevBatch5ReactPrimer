import React from 'react';

class HelloWorld extends React.Component {

    render() {
        const message = this.props.message ? this.props.message : 'Hi, Hello';
        return <div>Hello World Component. Message from {this.props.name} and the message is : {message}</div>
    }
}

export default HelloWorld;