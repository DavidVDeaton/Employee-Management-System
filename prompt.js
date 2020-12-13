const db = require('./Database');

module.exports = {

    loadPrompts: [
        {
            type: 'list',
            name: 'choice',
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
        }
    ]

    // addEmployeePrompt: [
    //     {
    //         type: 'input',
    //         message: 'Input name of employee.',
    //         name: 'addEmployee'
    //     }
    // ],

    // addDepartmentPrompt: [
    //     {
    //         type: 'input',
    //         message: 'Input name of team.',
    //         name: 'addTeam'
    //     }
    // ],

    // addRolesPrompt: [
    //     {
    //         type: 'input',
    //         message: 'Input name of position.',
    //         name: 'addPosition'
    //     }
    // ],

    // viewEmployeePrompt: [
    //     {
    //         type: 'list',
    //         message: 'List of employees.',
    //         name: 'viewEmployee'
    //     }
    // ],

    // viewDepartmentPrompt: [
    //     {
    //         type: 'list',
    //         message: 'List teams.',
    //         name: 'viewTeam'
    //     }
    // ],

    // viewRolesPrompt: [
    //     {
    //         type: 'list',
    //         message: 'List positions.',
    //         name: 'viewPosition'
    //     }
    // ],

    // updateEmployeeRole: [
    //     {
    //         type: 'input',
    //         message: 'Update the employees new position.',
    //         name: 'updatePosition'
    //     }
    // ]
};

    
