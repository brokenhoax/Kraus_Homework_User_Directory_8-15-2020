import React, { Component } from "react";
import { getEmployee, getemployees } from "../services/employeeDb";

class Employees extends Component {
  state = {
    employees: getemployees()
  };

  renderEmployees() {
    if (this.state.employees.length === 0) return <p>There are no employees!</p>;
    return <table>{ this.state.employees.map(name => <tr key={name}>{name}</tr>)}</table>;
  }

  render() {

    return <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Department</th>
          <th>Sick Days</th>
          <th>Rating</th>
        </tr>
      </thead>
        <tbody>
          { this.state.employees.map(employee => ( 
            <tr>
              <td>{employee.name}</td>
              <td>{employee.department.name}</td>
              <td>{employee.sickDays}</td>
              <td>{employee.employeeRank}</td>
            </tr>
          ))}
        </tbody>
    </table>
  }

}

export default Employees; 