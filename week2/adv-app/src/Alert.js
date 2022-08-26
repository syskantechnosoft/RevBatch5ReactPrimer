import React from 'react';

class Alert extends React.Component {
    showAlert() {
        alert("React is developed by Facebook");
    }

    render() {
        return <div>
            <button onClick={this.showAlert}>
                Show Alert
            </button>
        </div>;
    }
}

export default Alert;