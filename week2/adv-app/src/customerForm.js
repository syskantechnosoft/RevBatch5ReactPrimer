import React from 'react';

class CustomerForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            firstName: '',
            lastName: '',
            email: ''
        };
    }

    handleFirstNameChange(evt) {
        const firstName = evt.target.value;
        this.setState(
            {
                firstName: firstName
            }
        );
    }

    handleLastNameChange(evt) {
        const lastName = evt.target.value;
        this.setState(
            {
                lastName: lastName
            }
        );
    }
    handleEmailChange(evt) {
        const email = evt.target.value;
        this.setState(
            {
                email: email
            }
        );
    }

    handleSubmit(evt) {
        evt.preventdefault();
        const newCustomer = this.state;
        console.log('in form :'+this.state);
        this.props.addCustomer(newCustomer);
    }

    render() {
        return (
            <div>
                <h3>Customer Form</h3>
                <form onSubmit={this.handleSubmit} className="ui form">
                    <div className="form-group">
                        <lable>First Name</lable>
                        <input type="text" name="firstName" className="form-control" value={this.state.firstName} onChange={this.handleFirstNameChange} />
                        <lable>Last Name</lable>
                        <input type="text" name="lastName" className="form-control" value={this.state.lastName} onChange={this.handleLastNameChange} />
                        <lable>EMail</lable>
                        <input type="text" name="email" className="form-control" value={this.state.email} onChange={this.handleEmailChange} />
                        <input type="submit" value="Add Customer" className="form-control btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
}


export default CustomerForm;