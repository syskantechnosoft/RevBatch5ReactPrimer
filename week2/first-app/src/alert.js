import React from 'react';

class Alert extends React.Component {

    showAlert() {
        alert("This is an Alert... React is a greate UI Library!!");
    }

    render() {
        return (
            <div>
                <button onClick= {this.showAlert} >Click Me Pls!!</button>
            </div>
        );
    }

}

export default Alert;