
/* 
1. Create a function in a second file, use export to export it
2. In your main file import and execute the function

3. Write out a fat arrow function using the same line to return (as in no return keyword)
4. Add default parameters to the above function


5. Create an object that has a child object, that itself has a child object (3 levels).
6. Use object destructuring to pull out the parts at level 3
7. Add a default value to the above destructuring

8. Destructure an array

9. Create two objects. Add more than two keys/values to both objects. Copy all the items from the first object into the second object. Use the spread operator.
10. Send 5 arguments to a function and use the rest operator to group them
11. Add a function to one of the objects, use the object method shorthand. (edited) 
*/



// -----------------------------------------------------------------------------------------------------

// 1. create a function in second file (function.js)
// 2. In your main file import and execute the function

import { randomAnimals } from "./function";
    
console.log(randomAnimals());


// -----------------------------------------------------------------------------------------------------
// 3. Write out a fat arrow function using the same line to return (as in no return keyword)
// 4. Add default parameters to the above function

const address = ( city,street, number) => (`She lives in ${city}, ${street} ${number}`);
console.log(address('Kraainem','Rue Jules adant', 120));


// ------------------------------------------------------------------------------------------------------
// 5. Create an object that has a child object, that itself has a child object (3 levels).



const family = {
    name: 'Veronique',
    role: 'grandmother',
    age: 67,
    location: 'Lille',
    hobbies: ['latino dance', 'wine tasting', 'hiking', 'swimming'],
    children: {
        daughter: {
            name: 'Sophia',
            age: 35,
            city: 'Paris',
            grandChildren: {
                 son: 'Louis',
                 son2: 'Matheo',
            }
        },
        son: { 
            name: 'Theo', 
            age: 37, 
            city: 'Marseille', 
            grandChildren: 2,
        }
    }
}

// 6. Use object destructuring to pull out the parts at level 3

// console.log(family);



const { name, age, role, cityOfBirth: Lyon} = family;

const  { son, son2 } = family.children.daughter.grandChildren;

console.log(`${name}  has 2 grandsons: ${son} and ${son2}`);


// 7. Add a default value to the above destructuring

//  addded: cityOfbirth, line 77


// --------------------------------------------------------------------------------------------------------
//  8. Destructure an array
//   array  is from the object  "family" above

const [hobby1, hobby3, hobby2] = family.hobbies;

console.log(`Grandma is very active and likes ${hobby1} ${hobby2} and ${hobby3} in the evenings!`)


// ---------------------------------------------------------------------------------------------------------

// 9. Create two objects. Add more than two keys/values to both objects. 
// Copy all the items from the first object into the second object. Use the spread operator.


const country = {
    name: 'Spain',
    located: 'South Europe',
    language: 'spanish',
    currency: 'euro',
};

const spain = {
    capital: 'Madrid',
    population: '47 mln',
    callingCode: '+34',
    drivingSide: 'right',
};

const copyCountry = {
    capital: 'Madrid',
    population: '47 mln',
    callingCode: '+34',
    drivingSide: 'right', ...country };

console.log(copyCountry);


// -----------------------------------------------------------------------------------------------------------
// 10. Send 5 arguments to a function and use the rest operator to group them

const belgianFood = (...dishes) => {
    console.log(dishes);
}

belgianFood('chocolate', 'waffles', 'moules-frites', 'frites-fries','beer');



// ------------------------------------------------------------------------------------------------------------
// 11. Add a function to one of the objects, use the object method shorthand. (edited) 
//  I used new object cheetah

const cheetah = {
    family: 'cat',
    location: ['africa', 'southwest asia'],
    carnivore: true,
    class: 'mammals',
    speed (speed) {
       
        if ( speed > 80 && speed < 90) {
            console.log('she runs slow for her speed');
        } else  if ( speed >= 90 && speed <= 110) {
            console.log('she runs for fun');
        } else if ( speed > 110 && speed < 130  ) {
            console.log('she runs for a hunt!');
        }
    }
}


console.log(cheetah.speed(125));


// --------------------------------------------------------------------------------------------------------------