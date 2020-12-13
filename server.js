const { prompt } = require('inquirer');
const db = require('./database');
require('console.table');

async function loadPrompts() {
  const { answer } = await prompt([
    {
      type: 'list',
      name: 'choice',
      message: 'What would you like to do?',
      choices: [
		'Add Departments',
		'Add Roles',
		'Add Employees',
		'View Departments',
		'View Roles',
		'View Employees',
		'Update Employee Role',
	  ],
	}
]);

  switch (answer) {
    case 'Add Departments':
	  	return addDepartments();
	case 'Add Roles':
		return addRoles();
	case 'Add Employees':
		return addEmployees();
	case 'View Departments':
      	return viewDepartments();
    case 'View Roles':
		return viewRoles();
	case 'View Employees':
		return viewEmployees();
	case 'Update Employee Role':
      	return updateEmployeeRole();
  }
}

async function addEmployees() {
	const roles = await db.findRoles();
	const employees = await db.findEmployees();
  
	const employee = await prompt([
	  {
		name: 'firstname',
		message: 'Input first name.'
	  },
	  {
		name: 'lastname',
		message: 'Input last name.'
	  }
	]);
  
	const roleList = roles.map(({ id, title }) => ({
	  name: title,
	  value: id
	}));
  
	const { roleId } = await prompt({
	  type: 'list',
	  name: 'roleId',
	  message: 'Select the employee role.',
	  choices: roleList
	});
  
	employees.role_id = roleId;
  
	await db.createEmployee(employee);
  
	console.log(
	  `Added employee to the database.`
	);
  
	loadMainPrompts();
}

async function addDepartments() {
	const department = await prompt([
	  {
		name: 'name',
		message: 'Name the new department.'
	  }
	]);
  
	await db.createDepartment(department);
  
	console.log(`Added department to the database.`);
  
	loadMainPrompts();
}

async function addRoles() {
	const departments = await db.findDepartments();
  
	const departmentList = departments.map(({ id, name }) => ({
	  departmentname: name,
	  value: id
	}));
  
	const role = await prompt([
	  {
		name: 'title',
		message: 'Name the new role.'
	  },
	  {
		name: 'salary',
		message: 'Input the salary of the new role.'
	  },
	  {
		type: 'list',
		name: 'departmentid',
		message: 'Select the department this role belongs to.',
		choices: departmentList
	  }
	]);
  
	await db.createRole(role);
  
	console.log(`Added role to the database.`);
  
	loadMainPrompts();
}

async function viewDepartments() {
	const departments = await db.findDepartments();
  
	console.table(departments);
  
	loadMainPrompts();
}

async function viewRoles() {
	const roles = await db.findAllRoles();

	console.table(roles);
  
	loadMainPrompts();
}

async function viewEmployees() {
  const employees = await db.findEmployees();

  console.table(employees);

  loadPrompts();
}

async function updateEmployeeRole() {
  const employees = await db.findEmployees();

  const employeeList = employees.map(({ id, firstname, lastname }) => ({
    employeename: `${firstname} ${lastname}`,
    value: id
  }));

  const { employeeId } = await prompt([
    {
      type: 'list',
      name: 'employeeId',
      message: 'Select the employee you would like to update.',
      choices: employeeList
    }
  ]);

  const roles = await db.findRoles();

  const roleList = roles.map(({ id, title }) => ({
    name: title,
    value: id
  }));

  const { roleId } = await prompt([
    {
      type: 'list',
      name: 'roleId',
      message: 'Select the role you want to assign to the selected employee.',
      choices: roleList
    }
  ]);

  await db.updateEmployeeRole(employeeId, roleId);

  console.log('Update role.');

  loadMainPrompts();
}