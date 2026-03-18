console.log('Hello world2');
console.error('this na error');
console.warn('this is a warning');

/*
//const age = 30;
//age = 31 
let score = 20;
console.log(score)


const name = 'John';
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log('My name is ' + name+ ' and my age is ' + age);
//template strings
const hello = `My name is ${name} and my age is ${age}`;

console.log(hello)

const s = ('Hello World!')
console.log(s.toLowerCase())
console.log(s.toUpperCase())

//indexing
console.log(s.substring(0, 7))
console.log(s.substring(0, 5).toUpperCase())

//split
console.log(s.split(''));

const ss = 'hospital, computers, flyovers, sugarcane'
console.log(ss.split(','));

//Arrays - variables that hold multiple values
const numbers = new Array(1,2,3,4,5);

const fruits = ['apples', 'oranges', 'pears'];
console.log(fruits);
console.log(fruits[2]);
fruits[3] = 'grapes'
console.log(fruits)

fruits.push('mangoes'); //adds items to the end of the array
console.log(fruits);

fruits.unshift('banana'); //adds items to the begining of an array
console.log(fruits);

fruits.pop();
console.log(fruits);

console.log(Array.isArray(fruits));

console.log(fruits.indexOf('mangoes'));

//============================

const person = {
    firstname: 'Sally',
    surname: 'Doe',
    age: 30,
    hobbies: ['movies', 'baking', 'swimming'],
    address: {
        street: 'Zaramaganda Rd',
        city: 'Jos',
        state: 'PL',
        postal_code: 3215
    }
}

console.log(person.firstname, person.age, person.hobbies[0], person.address.city)

//deconstructor method
const { firstname, surname, address: {street} } = person;
console.log(firstname, street)

const { hobbies: [, hobby2]} = person;
console.log(hobby2)
//or
const { hobbies} = person;
console.log(hobbies)

const [ h1, h2 ] = hobbies;
console.log(h1, h2)

person.email = 'sally@email.com'
console.log(person)

//======================================

const todos = [
    {
        id: 1,
        task: 'empty trash',
        isCompleted: true
    },
    {
        id: 2,
        task: 'meeting with Boss',
        isCompleted: false
    },
    {
        id: 3,
        task: 'dentist appointment',
        isCompleted: true
    }
]
console.log(todos)

const todoJSON = JSON.stringify(todos); //displays JSON data format
console.log(todoJSON)

//========================================

//FOR loop
for(i = 0; i <= 10; i++ ) {
    console.log(`For loop number: ${i}`);
}

//while loops
let j = 10;
while(j > 0 ) {
    console.log(`While loop number: ${j}`)
    j--
}


for(let i = 0; i < todos.length; i++) {
    console.log(`for loop number lenght: ${i}`)
    console.log(todos[i].task);
}

for(let t of todos) {
    console.log(t.isCompleted)
}


// High order array methods
// foreach, map, filter

// 1. for each, these take in a fn
todos.forEach(function(t) {
    console.log(`forEach ${t}`)
    console.log(t)
})

// map
const t_Text = todos.map(function(t) {
    return t.isCompleted;
})
console.log(`map ${t_Text}`)
// filter
const t_completed = todos.filter(function(t) {
    return t.isCompleted === false;
});
console.log(t_completed)

const t_complete = todos.filter(function(t) {
    return t.isCompleted === true;
}).map(function(t) {
    return t.task
})
console.log(t_complete)

// COnditionals
const a = 22;
if (a === 10) {
    console.log('x is 10')
} else if(a > 10) {
    console.log('x is something less')
} 
else {
    console.log('x is not 10')
}


const m = 6;
const n = 11;

if (m > 5 && n > 10) {
    console.log('m is more than 5 or n is more than 10');
}

// ternery
const p = 11;
const color = p> 10 ? 'red' : 'blue'
console.log(color)

switch(color) {
    case 'red':
        console.log('color is red')
        break;
    case 'blue':
        console.log('color is blue')
        break;
    default:
        console.log('color is not red nor blue')
}


// Fns
function addNums(num1, num2) {
    return num1 + num2;
}
console.log(addNums(5, 4));
// using arrow fns
const addNumbs = (num1, num2) => num1 + num2;
console.log(addNumbs(5, 4))


// OOP
function Person(fname, lname, dob) {
    this.fname = fname;
    this.lname = lname;
    this.dob = new Date(dob);
    // add methods
    this.getBirthYear = function() {
        return this.dob.getFullYear();
    }
}
// step2 = instantiation using constructor fn
const person1 = new Person('John', 'Doe', '4-3-1990')
const person2 = new Person('Jenny', 'Doe', '4-14-1990')

console.log(person2.fname)
console.log(person2.dob)

// add methods
console.log(person1.getBirthYear());



// classes
class Persona {
    constructor(fname, lname, dob) {
        this.fname = fname;
        this.lname = lname;
        this.dob = new Date(dob);    
    }
    getBirthYear() {
        return this.dob.getFullYear();
    }
}
// step2 = instantiation using constructor fn
const person3 = new Person('John', 'Doe', '4-3-1990')
const person4 = new Person('Jenny', 'Doe', '4-14-1990')

console.log(person3.dob.getFullYear)



// dom
console.log(window);
//window.alert(1);


// single element selectors
console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));


// multiple element selector
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('.item'));
console.log(document.getElementsByTagName('.item'));

const itemss = document.querySelectorAll('.item');
itemss.forEach((item) => console.log(item));

const ul = document.querySelector('.items');
//ul.remove()
//ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h4>Hello</h4>';

const btn = document.querySelector('.btn');
btn.style.background = 'red';

btn.addEventListener('click', (e) => {
    e.preventDefaultt();
    console.log('click');
    console.log(e.target, (e));

    document.querySelector('#my-form').style.background = '#ccc'
});


for (i = 1; i <=100; i++) {
  console.log(i)
}
let f = 0;
while (f <= 100); {
    a++;
    console.log(a)
}

let day =0;

while (day < 7) {
    day++
    console.log(day)
}



for (let days = 1; days <= 7; days++) {
    if (days = 1) {
        console.log("Sunday")
    }
    else if (days = 2) {
        console.log("Monday")
    }
    else if (days = 3) {
        console.log("Tuesday")
    }
    else if (days = 4) {
        console.log("Wednesday")
    }
    else if (days = 5) {
        console.log("Thursday")
    }
    else if (days = 6) {
        console.log("Friday")
    }
    else if (days = 7) {
        console.log("Saturday")
    }

}




function dayOfTheWeek(day) {
    switch(day){
        case 0:
            return "Sunday"
    }
}


*/

class Account {
    constructor(firstname, lastname, balance=1_000) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.starting_balance = balance
    }
    
 
    getbalance() {
        return this.starting_balance;
    }
    deposit(amount) {
        this.starting_balance += amount;
        return this.starting_balance
    }
    withdraw(amount) {
        this.starting_balance -= amount;
        return this.starting_balance;
    }
}
let user1 = new Account("Joy", "Paul", 4_000);
let user2 = new Account("Bot", "Pam", 1_000);
let user3 = new Account("Peace", "Ply", 2_000);

console.log(user1.deposit(2_000));
console.log(user2.withdraw(500));