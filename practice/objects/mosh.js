//Part 1
/* const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function() {
        console.log('draw');
    }
};
circle.draw(); */

//Part 2
/* function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw');
        }
    }
}
const circle = createCircle(1);
circle.draw(); */

//Part 3
/* 
function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw');
        }
    }
}
const circle = createCircle(1);

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
const another = new Circle(1);
*/

//Part 4 - Every object has a constructor property
/*
function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw');
        }
    }
}
const circle = createCircle(1);

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
const another = new Circle(1);

//Other constructors
let x = {}; //let x = new Object();
new String(); //'', ""
new Boolean(); //true, false
new Number(); //1, 2, 3
*/

//Part 5 - Functions are Objects
/*
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
//Function constructor
const Circle1 = new Function('radius', `
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
`);
const circle = new Circle1(1);
Circle.call({}, 1);
Circle.apply({}, [1]);
const another = new Circle(1);
*/
//Part 6 - Primatives versus Objects
/* 
let x = { value: 10 };
let y = x;

x.value = 20; //y = 20 - reference objects are not independent

let a = 10;
let b = a;

a = 20; //y = 10 - primatives are independent

//Primatives are copied by value, objects are copied by reference

let number = 10
function increase(number) {
    number++;
}
increase(number);
console.log(number); //10

let number2 = {value: 10};
function increase2(number2) {
    number2.value++;
}
increase2(number2);
console.log(number2); //11
*/

//Part 7 - Adding/Removing Properties
/* 
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
const circle = new Circle1(1);
circle.location = { x: 1};
circle['location'] = { x: 1 };

const propertyName = 'center location';
circle[propertyName] = { x: 1 };

delete circle.location; //delete a property, such as sensitive info we don't want to send to client
*/

//Part 8 - Enumerate Properties of an Object
/* 
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
const circle = new Circle(10);

for (let key in circle) {
    if (typeof circle[key] !== 'function')
    console.log(key, circle[key]);
}

const keys = Object.keys(circle);
console.log(keys);

if ('radius' in circle) { //Check for the existence of a property or method in an object
    console.log('Circle has a radius.');
}
 */

//Part 10 - Implementing Abstraction
/*
function Circle(radius) {
    this.radius = radius;
    let defaultLocation = { x: 0, y: 0}; //private
    let computeOptimumLocation = function(factor) { //private
        //...
    }
    this.draw = function() {
        computeOptimumLocation(0.1);
        console.log('draw');
    }
}
const circle = new Circle(10);
circle.computeOptimumLocation();
circle.draw();
*/

//Part 11 - Getters and Setters
/* function Circle(radius) {
    this.radius = radius;
    this.getDefaultLocation = function () {
        return defaultLocation;
    }
    let defaultLocation = { x: 0, y: 0}; //private
    this.draw = function() {
        console.log('draw');
    }
    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation;
        },
        set: function(value) {
            if(!value.x || !value.y) throw new Error('Invalid location.');
            defaultLocation = value;
        }
    });
}
const circle = new Circle(10);
circle.defaultLocation = 1;
circle.draw(); */

//Part 12 - Exercise

function Stopwatch() {
    this.duration = 0;
    let running = false;
    let startTime = 0;
    let stopTime = null;
    this.start = () => {
        if(!running) {
            startTime = new Date()
            running = true;
        }else{
            throw new Error('Already started.');
        }
    }
    this.stop = () => {
        if(running) {
            stopTime = new Date();
            running = false;
            this.duration =+ stopTime - startTime
        }else{
            throw new Error('Watch already stopped.');
        }
    }
    this.reset = () => {
        duration = 0;
        running = false;
        console.log('Stopwatch reset.')
    }
}
let sw = new Stopwatch();