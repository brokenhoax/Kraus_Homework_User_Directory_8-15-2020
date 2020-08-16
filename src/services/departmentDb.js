export const department = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Sales" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Marketing" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Legal" }
];

export function getDepartments() {
  return department.filter(d => d);
}
