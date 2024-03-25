/*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal
*/

const bicycles = [
    {
        name: 'bmx',
        weight: 10
    },
    {
        name: 'mountain bike',
        weight: 15 
    }, 
    {
        name: 'road bike',
        weight: 20  
    }, 
    {
        name: 'cyclocross',
        weight: 25
    }, 
    {
        name: 'trike',
        weight: 30
    },
    {
        name: 'hybrid',
        weight: 35
    },  
    {
        name: 'atv',
        weight: 40
    },
    {
        name: 'mountain bike 2',
        weight: 45
    },
    {
        name: 'road bike 2',
        weight: 50
    },
    {
        name: 'cyclocross 2',
        weight: 55
    }
];

let minimumWeight = bicycles[0].weight;
bicycles.forEach((el) => {
    if (bicycles.weight < minimumWeight) {
        minimumWeight = bicycles.weight;
        return minimumWeight, bicycles.name;
    }
})

console.log(`La bici con peso minore è ${bicycles.name} con un peso di ${minimumWeight} kg`);
