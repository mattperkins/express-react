import React, { Component } from 'react'
import './style.css'

class Customers extends Component {
  state={
    customers: []
  }

 componentDidMount() {
   fetch('/api/customers')
   .then(lemon => lemon.json())
   .then(customers => this.setState({customers}))
 }

  render() {
    return (
      <div className="Customers">
        <h2>Customers</h2>

        <ul>
          {this.state.customers.map(customer =>
            <li key={customer.id}>
              <span className="customer-data">{ customer.name }</span>
              <span className="customer-data">{ customer.email }</span>
            </li>
          )}
        </ul>

      </div>
    )
  }
}

export default Customers

 