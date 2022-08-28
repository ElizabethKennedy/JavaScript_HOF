console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function plus(num1) {

    return function (plusNumber) {
        return plusNumber + num1

    }
}

let plus15 = plus(15)


console.log(plus15(10));

//Exercise 2

let users = [
    {
        name: "Frodo",
        age: 50,
        score: 85,
        isActive: false,
    },
    {
        name: "Sam",
        age: 38,
        score: 94,
        isActive: true,
    },
    {
        name: "Merry",
        age: 36,
        score: 82,
        isActive: true,
    },
    {
        name: "Pippin",
        age: 26,
        score: 77,
        isActive: false,
    },
];

//Exercise 3

users.forEach((item) => {
    console.log(item.name, item.age, item.score, item.isActive);

}
)



let nameScore = users.map((item) => {
    return {
        name: item.name, score: item.score
    };



}
)
console.log(nameScore);

//Exercise 4

users.forEach((item) => {

}
)