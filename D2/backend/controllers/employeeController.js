let employees = [
  {
    id: 1,
    name: "Praneeth",
    address: "Hyderabad",
    dept: "IT",
    manager: "Shiva",
  },
  {
    id: 2,
    name: "Pavan",
    address: "Delhi",
    dept: "Finance",
    manager: "Sai",
  },
];

exports.getEmployees = (req, res) => {
  res.json(employees);
};

exports.getEmployeeById = (req, res) => {
  const employee = employees.find((emp) => emp.id == req.params.id);
  res.json(employee);
};

exports.createEmployee = (req, res) => {
  const newEmployee = { id: employees.length + 1, ...req.body };
  employees.push(newEmployee);
  res.json(newEmployee);
};

exports.updateEmployee = (req, res) => {
  const index = employees.findIndex((emp) => emp.id == req.params.id);
  employees[index] = { ...employees[index], ...req.body };
  res.json(employees[index]);
};

exports.deleteEmployee = (req, res) => {
  employees = employees.filter((emp) => emp.id != req.params.id);
  res.json({ message: "Employee deleted successfully" });
};
