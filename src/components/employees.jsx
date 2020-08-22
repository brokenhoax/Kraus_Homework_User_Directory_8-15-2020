import React, { Component } from "react";
import { getEmployees } from "../services/employeeDb";
import EmployeesTable from "./employeesTable";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import { getDepartments } from "../services/departmentDb";
import _ from "lodash";

class Employees extends Component {
  state = {
    employees: [],
    departments: [],
    currentPage: 1,
    pageSize: 4, 
    sortColumn: { path: 'title', order: 'asc' }, 
  };

  renderEmployees() {
    if (this.state.employees.length === 0) return <p>There are no employees!</p>;
    return <table>{ this.state.employees.map(name => <tr key={name}>{name}</tr>)}</table>;
  }

  handleLike = employee => {
    const employees = [...this.state.employees];
    const index = employees.indexOf(employee);
    employees[index] = {...employees[index]};
    employees[index].liked = !employees[index].liked;
    this.setState({ employees });
    
  }

  handleDelete = employee => {
    // console.log(employee);
    const employees = this.state.employees.filter(e => e._id !== employee._id);
    this.setState({ employees });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  }

  componentDidMount() {
    const departments = [{ _id: "", name: "All Departments"}, ...getDepartments()]
    this.setState({ employees: getEmployees(), departments });
  }

  handleDepartmentSelect = department => {
    this.setState({ selectedDepartment: department, currentPage: 1 });
  }

  handleSort = sortColumn => {
    
    this.setState({ sortColumn })
  }

  render() {
    const { length: count } = this.state.employees
    const { 
      pageSize, 
      currentPage, 
      sortColumn,
      selectedDepartment, 
      employees: allEmployees
    } = this.state;

    if (count === 0 ) return <p>There are no employees in the database.</p>;

    const filtered = selectedDepartment && selectedDepartment._id ? allEmployees.filter(e => e.department._id === selectedDepartment._id) : allEmployees;

    const sorted= _.orderBy(filtered, [sortColumn.path], [sortColumn.order])

    const employees = paginate(sorted, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-2">
          <ListGroup 
            items={this.state.departments}
            selectedItem={this.state.selectedDepartment}
            onItemSelect={this.handleDepartmentSelect}
            />
        </div>
        <div className="col">        
          <main role="main" className="container">
            <p>Showing {filtered.length} Employees in the database.</p>
            <EmployeesTable 
              employees={employees}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
              sortColumn={sortColumn}
            />
            <Pagination 
              itemsCount={filtered.length} 
              pageSize={pageSize}
              currentPage={currentPage} 
              onPageChange={this.handlePageChange} />
            </main>
          </div>
      </div>
    )
  }
}

export default Employees;