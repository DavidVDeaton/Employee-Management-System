const connection = require("./connection");

class DB {

  constructor(connection) {
    this.connection = connection;
  }

  findEmployees() {
    return this.connection.query(
      "SELECT * FROM employee ORDER BY employee.id;"
    );
  }

  createEmployee(employee) {
    return this.connection.query("INSERT INTO employee SET ?", employee);
  }

  updateRole(employeeId, roleId) {
    return this.connection.query(
      "UPDATE employee SET role.id = ? WHERE id = ?",
      [roleId, employeeId]
    );
  }

  findRoles() {
    return this.connection.query(
      "SELECT * FROM role ORDER BY role.id;"
    );
  }

  // Create a new role
  createRole(role) {
    return this.connection.query("INSERT INTO role SET ?", role);
  }

  findDepartments() {
    return this.connection.query(
      "SELECT * FROM department ORDER BY department.id;"
    );
  }

  createDepartments(department) {
    return this.connection.query("INSERT INTO department SET ?", department);
  }

}

module.exports = new DB(connection);