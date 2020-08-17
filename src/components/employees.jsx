import React, { Component } from "react";
import { getEmployees } from "../services/employeeDb";

class Employees extends Component {
  state = {
    employees: getEmployees()
  };

  renderEmployees() {
    if (this.state.employees.length === 0) return <p>There are no employees!</p>;
    return <table>{ this.state.employees.map(name => <tr key={name}>{name}</tr>)}</table>;
  }


  handleDelete = employee => {
    // console.log(employee);
    const employees = this.state.employees.filter(e => e._id !== employee._id);
    this.setState({ employees });
  };


  render() {
    const { length: count } = this.state.employees
    if (count === 0 )
      return <p>There are no employees in the database.</p>;

    return (
      <React.Fragment>
        <main role="main" className="container">
          <p>Showing {this.state.employees.length} Employees in the database.</p>
          <table className="table">
            <thead>
              <tr>
                <th>Photo</th>
                <th>Name</th>
                <th>Department</th>
                <th>Sick Days</th>
                <th>Rating</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              { this.state.employees.map(employee => ( 
                <tr key={employee._id}>
                  <td>{<img height={40} alt="Employee" src={employee.photo}></img>}</td>
                  <td>{employee.name}</td>
                  <td>{employee.department.name}</td>
                  <td>{employee.sickDays}</td>
                  <td>{employee.employeeRank}</td>
                  <td><button onClick={() => this.handleDelete(employee)} className="btn btn-danger btn-sm">Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
          </main>
      </React.Fragment>
    )
  }
}

export default Employees; 