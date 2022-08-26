import React from 'react';

function CustomerDetail (props) {
    const customer = props.customer;
    return <div>
        <h3>Customer Details</h3>
        <hr/>
        <p>Customer ID : {customer.id}</p>
        <p>First Name  : {customer.firstName}</p>
        <p>Last Name   : {customer.lastName}</p>
        <p>Email       : {customer.email}</p>
    </div>;

}

export default CustomerDetail;