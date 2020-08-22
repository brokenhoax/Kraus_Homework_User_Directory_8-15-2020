import React, { Component } from 'react';
import Like from "./common/like";
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";

class EmployeesTable extends Component {

  columns = [
    { key: "photo", content: employee => (<img height={40} alt="Employee" src={employee.photo}></img>)}, 
    { path: "name", label: "Name" }, 
    { path: "department.name", label: "Department" },
    { path: "sickDays", label: "Sick Days" },
    { path: "employeeRank", label: "Rating" },
    { key: "liked", content: employee => (<Like liked={employee.liked} onClick={() => this.props.onLike(employee)}/>)},
    { key: "delete", content: employee => (<button onClick={() => this.props.onDelete(employee)} className="btn btn-danger btn-sm">Delete</button>)},
  ];
  
  render() { 
    const { employees, onDelete, onLike, onSort, sortColumn } = this.props;

    return ( 
      <table className="table">
      <TableHeader
        columns={this.columns}
        sortColumn={sortColumn}
        onSort={onSort}
      />
      <TableBody 
      data={employees}
      columns={this.columns}/>
      {/* <tbody>
        { employees.map(employee => ( 
          <tr key={employee._id}>
            <td>{<img height={40} alt="Employee" src={employee.photo}></img>}</td>
            <td>{employee.name}</td>
            <td>{employee.department.name}</td>
            <td>{employee.sickDays}</td>
            <td>{employee.employeeRank}</td>
            <td>
              
            </td> 
            <td><button onClick={() => this.props.onDelete(employee)} className="btn btn-danger btn-sm">Delete</button></td>
          </tr>
        ))}
      </tbody> */}
    </table>
    );
  }
}
export default EmployeesTable;