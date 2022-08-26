import React from 'react';

class CustomerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: ''
        }
    }

    handleFirstNameChange(evt) {
        const firstName = evt.target.value;
        this.setState({
            firstName: firstName
        });
    }

    handlelastNameChange(evt) {
        const lastName = evt.target.value;
        this.setState({
            lastName: lastName
        });
    }

    handleEmailChange(evt) {
        const email = evt.target.value;
        this.setState({
            email: email
        });
    }

    handleSubmit(evt) {
        evt.preventdefault();
        const newCustomer = this.state;
        this.props.addCustomer(newCustomer);
    }

    render() {
        return <div className="container-fluid">
            <h3> Add Customer </h3>
            <form className="ui form" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>First Name :</label>
                    <input type="text" name="firstName" className="form-control" value={this.state.firstName} onChange={this.handleFirstNameChange} />
                </div>
                <div className="form-group">
                    <label>Last Name :</label>
                    <input type="text" name="lastName" className="form-control" value={this.state.lastName} onChange={this.handlelastNameChange} />
                </div>
                <div className="form-group">
                    <label>Email :</label>
                    <input type="email" name="email" className="form-control" value={this.state.email} onChange={this.handleEmailChange} />
                </div>
                <div className="form-group">
                    <label> &nbsp;</label>
                    <input type="submit" value="Add Customer" className="form-control btn btn-primary" />
                </div>
            </form>
        </div>;
    }
}

export default CustomerForm;