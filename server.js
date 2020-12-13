const inquirer = require('inquirer');
const db = require('./Database');
require('console.table');

loadPrompts();

async function loadPrompts() {
	inquirer.prompt({
		type: 'list',
		name: 'choices',
		message: 'What would you like to do?',
		choices: 
		[
			'Add Departments',
			'Add Roles',
			'Add Employees',
			'View Departments',
			'View Roles',
			'View Employees',
			'Update Employee Role',
		]
	})
	.then((answer) => {
		switch (answer.choices) {
			
			case 'Add Departments': addDepartments();
			break;
			case 'Add Roles': addRoles();
			break;
			case 'Add Employees': addEmployees();
			break;
			case 'View Departments': viewDepartments();
			break;
			case 'View Roles': viewRoles();
			break;
			case 'View Employees': viewEmployees();
			break;
			case 'Update Employee Role': updateEmployeeRole();
			break;

		}
 	});
}

async function addEmployees() {
	const roles = await db.findRoles();
	const employees = await db.findEmployees();
  
	const employee = await inquirer.prompt([
	  {
		name: 'firstname',
		message: 'Input first name.'
	  },
	  {
		name: 'lastname',
		message: 'Input last name.'
	  }
	]);
  
	const roleList = roles.map(({ id, position }) => ({
	  name: position,
	  value: id
	}));
  
	const roleId = await inquirer.prompt({
	  type: 'list',
	  name: 'position',
	  message: 'Select the employee role.',
	  choices: roleList
	});
  
	employees.roleid = roleId;
  
	await db.createEmployee(employee);
  
	console.log(
	  `Added employee to the database.`
	);
  
	loadPrompts();
}

async function addDepartments() {
	const department = await inquirer.prompt([
	  {
		name: 'team',
		message: 'Name the new department.'
	  }
	]);
  
	await db.createDepartments(department);
  
	console.log(`Added department to the database.`);
  
	loadPrompts();
}

async function addRoles() {
	const departments = await db.findDepartments();
  
	const departmentList = departments.map(({ id, name }) => ({
	  departmentname: name,
	  value: id
	}));
  
	const role = await inquirer.prompt([
	  {
		name: 'position',
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
  
	loadPrompts();
}

async function viewDepartments() {
	const department = await db.findDepartments();
  
	console.table(department);
  
	loadPrompts();
}

async function viewRoles() {
	const roles = await db.findRoles();

	console.table(roles);
  
	loadPrompts();
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

  const { employeeId } = await inquirer.prompt([
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

  const { roleId } = await inquirer.prompt([
    {
      type: 'list',
      name: 'roleId',
      message: 'Select the role you want to assign to the selected employee.',
      choices: roleList
    }
  ]);

  await db.updateEmployeeRole(employeeId, roleId);

  console.log('Update role.');

  loadPrompts();
}