import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0
        };
    }

    tick() {
        this.setState({
            seconds: this.state.seconds + 1
        });
    }

    componentDidMount(){
        this.Timer = setInterval(()=>this.tick(), 1000);
    }

    componentWillUnmount () {
        clearInterval(this.Timer);
    }

    render() {
        return <div>
            Time Elapsed : {this.state.seconds}
        </div>
    }
}

export default Counter;