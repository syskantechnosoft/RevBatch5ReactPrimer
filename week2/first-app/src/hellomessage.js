import React from 'react';

class HelloMessage extends React.Component {
    render() {
        //ternary operator - One line if else,
        const message = this.props.message ? this.props.message : 'Hi, Hello';

        return <div> message from {this.props.name} : {message} </div>;
    }
}

export default HelloMessage;