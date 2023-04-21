

// 1. Create a function in a second file, use export to export it
// counts each third down starting from end
//  exported to hw-part2.js


 export function randomAnimals() {
    let animals = ['tiger', 'elephant', 'rhinos','hippo','lion',
'camel','antelope','zebra', 'panda', 'fox','leopard','panthera','giraffe','koala',
'wolf','fox','deer','otter','cheetah','jaguar','cougar', 'squirrel'];
    for (let i = 20; i >= 0; i -= 3 ) {
        console.log(animals[i]);
    }
    
}
    
randomAnimals();