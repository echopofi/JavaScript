//primitive data types are stored in the stack ad the stack is in your RAM beceause their size is been known at rhr e run-time, in compiled languagies
//learn Hi\eap an Stack
// 
let person = {
    name: "John",
    name: "Jill", //this is called over-ride, as js over rides John
    age: 30,
    city: "Jos",
    isMarried: false,
    address: {
        home: "123 Main St",
        work: "456 Main St"
    },
    hobbies: ["reading", "traveling", "swimming"],
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);  
    }  
};
person.greet();
console.log(person.address.work);
//person.name = "Jack Sparrow";
console.log(person.name);

//spread operator is used to add items to an object
person = { ...person, country: "Nigeria", state: "Plateau", nextOfKin: "Jane Doe" };
console.log(person);