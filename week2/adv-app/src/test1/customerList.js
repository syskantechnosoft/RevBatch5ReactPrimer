import React from 'react';
import CustomerDetail from './customerDetail';
import CustomerForm from './customerForm';
import Customers from './customers.json';

class CustomerList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            customers: Customers,
            selectedCustomer: ''
        }
        this.onCustomerSelect = this.onCustomerSelect.bind(this);
        this.addCustomer = this.addCustomer.bind(this);
    }

    
    tabRow() {
        const tableRows = this.state.customers.map((customer, i) => {
            return (
                <tr onClick={e=>this.onCustomerSelect(e, customer)} key={i}>
                    <td>{customer.id}</td>
                    <td>{customer.firstName}</td>
                    <td>{customer.lastName}</td>
                    <td>{customer.email}</td>
                </tr>
            );
        });

        return tableRows;
    }

    onCustomerSelect(customer, i) {
        console.log("hi");
        console.log("selected Customer is :" + customer);
        this.setState({
            selectedCustomer: customer
        });
        console.log("selected customer" + this.state.selectedCustomer.firstName);
    }

    showCustomer() {
        this.setState({
            selectedCustomer: this.state.selectedCustomer
        });
    }
    addCustomer(newCustomer){
        const totalCustomers = this.state.customers.length;
        newCustomer.id = totalCustomers+1;
        const newList = [...this.state.customers, newCustomer]
        this.setState(
            {
                customers: newList
            }
        );
    }
    render() {
        return (<div className="container-fluid">
            <h2>Customers List</h2>
            <table className="table table-sm table-bordered table-hover">
                <thead className="table-dark">
                    <tr onSelect={this.showCustomer}>
                        <th>ID</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {this.tabRow()}
                </tbody>
            </table>
            <div className="row">
                <div className="col-md-4">
                    <CustomerForm />
                </div>
                <div className="col-md-4">

                </div>
                <div className="col-md-4">
                    <CustomerDetail customer={this.state.selectedCustomer}/>
                </div>
            </div>
        </div>);
    }
}

export default CustomerList;