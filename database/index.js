const connection = require("./connection");

class DB {

  constructor(connection) {
    this.connection = connection;
  }

  findEmployees() {
    return this.connection.query(
      "SELECT employee.id, employee.firstname, employee.lastname, role.position AS role, department.team AS department, role.salary AS role;"
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
      "SELECT role.id, role.position, department.team AS department, role.salary FROM role LEFT JOIN department on role.departmentid = department.id;"
    );
  }

  // Create a new role
  createRole(role) {
    return this.connection.query("INSERT INTO role SET ?", role);
  }

  findDepartments() {
    return this.connection.query(
      "SELECT department.id, department.team;"
    );
  }

  createDepartments(department) {
    return this.connection.query("INSERT INTO department SET ?", department);
  }

}

module.exports = new DB(connection);