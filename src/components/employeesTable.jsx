import React, { Component } from 'react';
import Like from "./common/like";
import Table from "./common/table";

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
    const { employees, onSort, sortColumn } = this.props;

    return ( 
      <Table 
        columns={this.columns} 
        data={employees} 
        sortColumn={sortColumn} 
        onSort={onSort} 
      />
    );
  }
}
export default EmployeesTable;