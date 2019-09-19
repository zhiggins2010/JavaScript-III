/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit Binding

        'this' references the object to the left of the dot '.' at the time the function is invoked.

* 2. Explicit Binding

        'this' references what is stated in the '()' when the function is called.
        .call takes the arguments individually, one-by-one and imedietly invokes the function.
        .apply takes the arguments together as an array and imedietly invokes the function.
        .bind takes the arguments individually, one-by-one and creates a new function rather than invoking the previous function.



* 3. New Binding

        Using 'new' tells JavaScript to create a new object using the same paramaters with the arguments passed in at the time 'new' is called.

* 4. Window Binding

        When using 'this' without defining what 'this' is referencing, it will reference the Window object (the global scope, encompasing all of the code). You can bind the property using "window.`insert property here`:" but that is dangerous to do at the global scope. "Strict Mode" can be invoked by calling "'use strict'" in the object, which will cause window binding to return an error rather than being alowed. 

*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Implicit Binding
const me = {
    name: 'Zac',
    age: 27,
    sayName: function(){
        console.log(this.name);
    }
};

me.sayName();

// Principle 2
// code example for Explicit Binding
const sayName = function(){
    console.log('Explicit binding test: ' + this.name);
};
const myInfo = {
    name: 'Zac',
    age: 27,
};

sayName.call(myInfo);

// Principle 3
// code example for New Binding
const Animal = function(color, name, type){
    this.color = color;
    this.name = name;
    this.type = type;
};

const fox = new Animal('red', 'Juniper', 'Fox');
console.log(fox);

// Principle 4
// code example for Window Binding
const windowTest = function(){
    console.log(this.test);
}

window.test = "The window is open!";

windowTest();