import React from 'react';

class StateComponent extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            seconds:0
        };
    }

    tick(){
        this.setState({
            seconds : this.state.seconds +1
        });
    }
 
    componentDidMount(){
        setInterval(()=>this.tick(),1000);
    }
    render() {
    return <div>Time Elapsed : {this.state.seconds}</div>;
    }
}

export default StateComponent;