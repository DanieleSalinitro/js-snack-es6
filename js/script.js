/*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal
*/
/*
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
        weight: 8
    }
];

let minimumWeight = bicycles[0];
bicycles.forEach((el) => {
    if (el.weight < minimumWeight.weight) {
        minimumWeight = el;
//        return minimumWeight;
    }
})

console.log(`La bici con peso minore è ${minimumWeight.name} con un peso di ${minimumWeight.weight} kg`);
*/

/*Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/
const teams = [
    {
        name: 'Milan',
        points: 0,
        fouls: 0
    },
    {
        name: 'Roma',
        points: 0,
        fouls: 0    
    },
    {
        name: 'Inter',
        points: 0,
        fouls: 0
    },
    {
        name: 'Napoli',
        points: 0,
        fouls: 0    
    },
    {
        name: 'Juventus',
        points: 0,
        fouls: 0
    },
    {
        name: 'Lazio',
        points: 0,
        fouls: 0
    },
    {
        name: 'Atalanta',
        points: 0,
        fouls: 0
    }
];

teams.forEach((el) => {
    el.points = Math.floor(Math.random() * 100);
    el.fouls = Math.floor(Math.random() * 100);
});

const newTeams = teams.map((el) => {const {name, fouls} = el; return {name, fouls}});

