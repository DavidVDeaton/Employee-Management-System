const connection = require("./connection");

class DB {

  constructor(connection) {
    this.connection = connection;
  }

  // Find all employees, join with roles and departments to display their roles, salaries, departments, and managers
  findEmployees() {
    return this.connection.query(
      "SELECT employee.id, employee.firstname, employee.lastname, role.position, department.team AS department, role.salary;"
    );
  }

  // Create a new employee
  createEmployee(employee) {
    return this.connection.query("INSERT INTO employee SET ?", employee);
  }

  // Update the given employee's role
  updateRole(employeeId, roleId) {
    return this.connection.query(
      "UPDATE employee SET role.id = ? WHERE id = ?",
      [roleId, employeeId]
    );
  }

  // Find all roles, join with departments to display the department name
  findRoles() {
    return this.connection.query(
      "SELECT role.id, role.position, department.team AS department, role.salary FROM role LEFT JOIN department on role.department.id = department.id;"
    );
  }

  // Create a new role
  createRole(role) {
    return this.connection.query("INSERT INTO role SET ?", role);
  }

  // Find all departments, join with employees and roles and sum up utilized department budget
  findDepartments() {
    return this.connection.query(
      "SELECT department.id, department.team;"
    );
  }

  // Create a new department
  createDepartment(department) {
    return this.connection.query("INSERT INTO department SET ?", department);
  }

}

module.exports = new DB(connection);