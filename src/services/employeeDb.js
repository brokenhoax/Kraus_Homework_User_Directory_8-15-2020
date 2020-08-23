import * as departmentDb from "./departmentDb";

const employees = [
  {
    _id: "1",
    photo: "https://vignette.wikia.nocookie.net/simpsons/images/6/65/Bart_Simpson.png/revision/latest/top-crop/width/360/height/450?cb=20190409004756",
    name: "Bart",
    department: { _id: "5b21ca3eeb7f6fbccd471818", name: "Sales" },
    sickDays: 6,
    employeeRank: 2.5,
    liked: true
  },
  {
    _id: "2",
    photo: "https://i.pinimg.com/originals/6a/62/26/6a6226a10a9d528c98e95d75f8e31967.png",
    name: "Abe",
    department: { _id: "5b21ca3eeb7f6fbccd471818", name: "Sales" },
    sickDays: 5,
    employeeRank: 2.5,
    liked: true
  },
  {
    _id: "3",
    photo: "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
    name: "Homer",
    department: { _id: "5b21ca3eeb7f6fbccd471820", name: "Marketing" },
    sickDays: 8,
    employeeRank: 3.5,
    liked: false
  },
  {
    _id: "4",
    photo: "https://i.pinimg.com/originals/14/0f/57/140f575e6f499660b31f1b7fe355a1b2.png",
    name: "Lisa",
    department: { _id: "5b21ca3eeb7f6fbccd471814", name: "Operations" },
    sickDays: 7,
    employeeRank: 3.5,
    liked: false
  },
  {
    _id: "5",
    photo: "https://static.simpsonswiki.com/images/thumb/0/0b/Marge_Simpson.png/250px-Marge_Simpson.png",
    name: "Marge",
    department: { _id: "5b21ca3eeb7f6fbccd471814", name: "Operations" },
    sickDays: 7,
    employeeRank: 3.5,
    liked: false
  },
  {
    _id: "6",
    photo: "https://upload.wikimedia.org/wikipedia/en/9/9d/Maggie_Simpson.png",
    name: "Maggie",
    department: { _id: "5b21ca3eeb7f6fbccd471814", name: "Operations" },
    sickDays: 7,
    employeeRank: 3.5,
    liked: false
  },
  {
    _id: "7",
    photo: "https://i.pinimg.com/originals/93/f5/b0/93f5b0b730ecce2348ce483c03950002.png",
    name: "Flanders",
    department: { _id: "5b21ca3eeb7f6fbccd471820", name: "Marketing" },
    sickDays: 7,
    employeeRank: 4.5,
    liked: false
  },
  {
    _id: "8",
    photo: "https://upload.wikimedia.org/wikipedia/en/5/5a/Krustytheclown.png",
    name: "Krusty the Clown",
    department: { _id: "5b21ca3eeb7f6fbccd471820", name: "Marketing" },
    sickDays: 4,
    employeeRank: 3.5,
    liked: false
  },
  {
    _id: "9",
    photo: "https://i.pinimg.com/originals/0a/12/fe/0a12fed51329b360fe9036c5e0226c3b.png",
    name: "Mr. Burns",
    department: { _id: "5b21ca3eeb7f6fbccd471818", name: "Sales" },
    sickDays: 7,
    employeeRank: 3.5,
    liked: false
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
