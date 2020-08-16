import * as departmentDb from "./departmentDb";

const employees = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    name: "Bart",
    department: { _id: "5b21ca3eeb7f6fbccd471818", name: "Sales" },
    sickDays: 6,
    employeeRank: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    name: "Jody",
    department: { _id: "5b21ca3eeb7f6fbccd471818", name: "Sales" },
    sickDays: 5,
    employeeRank: 2.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    name: "Homer",
    department: { _id: "5b21ca3eeb7f6fbccd471820", name: "Marketing" },
    sickDays: 8,
    employeeRank: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    name: "Lisa",
    department: { _id: "5b21ca3eeb7f6fbccd471814", name: "Operations" },
    sickDays: 7,
    employeeRank: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    name: "Marge",
    department: { _id: "5b21ca3eeb7f6fbccd471814", name: "Operations" },
    sickDays: 7,
    employeeRank: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    name: "Maggie",
    department: { _id: "5b21ca3eeb7f6fbccd471814", name: "Operations" },
    sickDays: 7,
    employeeRank: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    name: "Flanders",
    department: { _id: "5b21ca3eeb7f6fbccd471820", name: "Marketing" },
    sickDays: 7,
    employeeRank: 4.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    name: "Krusty the Clown",
    department: { _id: "5b21ca3eeb7f6fbccd471820", name: "Marketing" },
    sickDays: 4,
    employeeRank: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    name: "Mr. Burns",
    department: { _id: "5b21ca3eeb7f6fbccd471818", name: "Sales" },
    sickDays: 7,
    employeeRank: 3.5
  }
];

export function getEmployees() {
  return employees;
}

export function getEmployee(id) {
  return employees.find(m => m._id === id);
}

export function saveEmployee(employee) {
  let employeeInDb = employees.find(m => m._id === employee._id) || {};
  employeeInDb.name = employee.name;
  employeeInDb.department = departmentDb.department.find(d => d._id === employee.departmentId);
  employeeInDb.numberInStock = employee.numberInStock;
  employeeInDb.dailyRentalRate = employee.dailyRentalRate;

  if (!employeeInDb._id) {
    employeeInDb._id = Date.now();
    employees.push(employeeInDb);
  }

  return employeeInDb;
}

export function deleteemployee(id) {
  let employeeInDb = employees.find(m => m._id === id);
  employees.splice(employees.indexOf(employeeInDb), 1);
  return employeeInDb;
}
