const employees = [
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

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 3000
    }
];

const getEmployee = (id) => {
    const nombre = employees.find(e => e.id === id);
    let myPromise = new Promise((resolve, reject) => {
        console.log(nombre);
        resolve(nombre);
    });
    return myPromise;
};

getEmployee(1)
    .then(nombre => console.log(nombre))
