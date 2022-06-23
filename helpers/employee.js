employees = [
    {
        id: 1,
        name: 'Gabriel Zapata',
        age: 52
    },
    {
        id: 2,
        name: 'Luisa Castro',
        age: 38
    },
    {
        id: 3,
        name: 'Sofia Zapata',
        age: 13
    }
];

salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 3000
    }
];

const getEmployee = (id, callback) => {
    const employee = employees.find(e => e.id === id);
    if ( employee ) {
        callback(null, employee);
    }
    else {
        callback(`No existe empleado conn id ${id}`);
    }
}

const id = 2;

getEmployee(id, (err, employee) => {
    if (err) {
        console.log(err);
        return err;
    }
    console.log(employee);
})


