import customersdata from './customers.json';
import React from 'react';
import CustomerDetails from './customerdetail';
import CustomerForm from './customerForm.js';

class Listing extends React.Component {

    constructor() {
        super();
        // this.onCustomerSelect = this.onCustomerSelect.bind();
        this.addCustomer = this.addCustomer.bind(this);
        this.state = {
            customers: customersdata,
            selectedCustomer: ''
        }
    }
    addCustomer(newCustomer) {
        console.log('add customer');
        const totalCustomers = this.state.customers.length;
        newCustomer.id = totalCustomers + 1;
        const newList = [...this.state.customers, newCustomer]
        this.setState(
            {
                customers: newList
            }
        );
    }
    render() {
        return <div>
            <h3>Customers List</h3>
            <table className="table table-hover table-bordered table-sm">
                <thead className="thead-light">
                    <tr onSelect={this.showCustomer}>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {this.tabRow()}
                </tbody>
            </table>
            <div className="row">
                <div className="col">
                    <CustomerForm addCustomer={this.addCustomer}></CustomerForm>
                </div>
                <div className="col">
                    <CustomerDetails customer={this.state.selectedCustomer}></CustomerDetails>
                </div>
            </div>
        </div>
    }

    tabRow() {
        const tableRows = this.state.customers.map((customer, i) => {
            return (
                <tr onClick={e => this.onCustomerSelect(e, customer)} key={i}>
                    <td> {customer.id}</td>
                    <td> {customer.firstName}</td>
                    <td> {customer.lastName}</td>
                    <td> {customer.email}</td>
                </tr>
            );
        });

        return tableRows;
    }

    onCustomerSelect(e, customer) {
        console.log('hi')
        this.setState({
            selectedCustomer: customer
        });
    }
    showCustomer() {
        this.setState({
            selectedCustomer: this.state.selectedCustomer
        });
    }
}

export default Listing;