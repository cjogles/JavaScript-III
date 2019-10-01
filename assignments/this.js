/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit Binding Rule - whenever you call on a method of an object using . notation, the object that contains the function to the left of the 
     dot is what "this" is referring to. 
* 2. Global (window) Binding Rule - When you create a variable or a function in the global execution context and you refer to the "this" variable.
     You will be calling on the global object in node.js or the Window object in the browser/console. 
* 3. New Binding Rule - When using the new keyword to create a new instantiation of an object using a constructor function, the "this"
     keyword references that specefic instance of object that the new keyword created. 
* 4. Explicit Binding Rule - When you the methods of .call, .apply, .bind, on an object you can explicity state where you want "this" to 
     reference too. You do this by passing in the object as an argument in the .call, .apply, or .bind methods. And the object that is the argument
     is your new location where "this" references to.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

//function declaration
// function sayHello() {
//     let en = "Hello";
//     let es = "Hola";
//     // returns undefined, because "this" refers to the windows object, not the "en" variable inside the sayHello Function
//     console.log(this.en);
//     // returns the "es" variable successfully
//     console.log(es);
// }
// // function invocation within the global context aka "this" refers to the windows object right now. A new sayHello function execution
// // context is created but this does not refer to any other object because no other object was targeted or referenced!
// sayHello();

// Principle 2

// code example for Implicit Binding

// const person = {
//     // name:value pairs created for the person object
//     name: "Jackson",
//     age: 26,
//     // sayHi method created for the person object
//     sayHi: function(name) {
//         // returns "Hi my name is Jackson" because the "this" keyword is referring to the object person and I defined the name as Jackson. 
//         // if I instead said: console.log(`Hi my name is ${name}.`); This would return "Hi my name is Phillip" because phillip is passed in 
//         // as the paramater and the "this" keyword isn't automatically or implicity referencing the person object as first instantiated. 
//         console.log(`Hi my name is ${this.name}.`);
//         // You can see the "this" keyword references or points to the entire person object. 
//         console.log(this);
//     }
// };

// call upon the sayHi method UPON the person object which I can do because the sayHi method is contained in the person object. I pass an 
// argument of "Phillip" because the method sayHi takes a name as a paramater. 
// person.sayHi("Phillip");

// Principle 3

// code example for New Binding

// created a constructor function that will create person objects. The person object should have a name, age and a way to say hello method
function Person(fullName, yearsOfAge) {
    this.name = fullName;
    this.age = yearsOfAge;
}

// added the Person Constructor function a nationality property and a greeting method via the protype inheritance chain. These properties and
// methods will not be instantly created for all Person's. Only those who need them. Therby saving memory usage. 
Person.prototype.nationality = "Australian";
Person.prototype.greeting = function() {
    return console.log(`My name is ${this.name}, and I am ${this.age} old.`);
};

//created new Person objects called waverli and jackson and gave them different full names and ages. They inherit the nationality of Australian
//and the method of greeting
const waverli = new Person('Wavy Gravy', 25);
const jackson = new Person('jacko packo', 26);

//testing out the greeting it should return My name is Wavy Gravy and I am 25 years old and then jackson should return my name is jackson and I 
//am 26 years old.
waverli.greeting();
jackson.greeting();


// Principle 4

// code example for Explicit Binding
// example of sending waverli object the greeting of Jackson and then vice versa
waverli.greeting.call(jackson);
jackson.greeting.call(waverli);