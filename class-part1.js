
/* 
Create a class that represents anything you like
Create a class that extends the first class
Create a class that extends the second class
Make sure each class has at least one method and one piece of data unique to it
Create an instance of the final class
Modify the classes above to use get/set (edited) 


*/

// ----------------------------------------------------------------------------------------------

class Bakery {
  constructor(name, address, open, close) {
    this._name = name;
    this._address = address;
    this._open = open;
    this._close = close;
    
  }

  // hours (open) {
  //   if (open === this._open && close === this._close) {
  //     return 'we are about to open/close';
  //   } else if ( open <= this._open && close >= this._close) {
  //     return "it's closed";
  //   }  else if (open > this._open && close < this._close) {
  //     return "We are open";
  //   } 
  // }

  hours (open) {
    if (open === this._open || open === this._close) {
      return 'we are about to open/close';
    } else if ( open < this._open || open > this._close) {
      return "it's closed";
    }  else if (open > this._open || open < this._close) {
      return "We are open";
    } 
  }


  get printDescription() {
    return `${this._name} opens at ${this._open} in ${this._address} `
  }

  set printDescription(open) {
    console.log('Our opening time is changed')
    return this._open = open;
   
  } 

}

const _bakery = new Bakery("Maison Dandoy", "Avenue Astrid 279", 7, 18);
console.log(_bakery);

console.log(_bakery.printDescription);
console.log(_bakery.printDescription = 3);
console.log(_bakery.printDescription);



console.log(_bakery.hours(5));


// ----------------------------------------------------------------------------------------

class Bread extends Bakery {
  constructor(name, address, open, close, types, pricePerKilo, grams) {
    super(name, address, open, close);
    this._types = types;
    this._ecologicalFlour = true;
    this._pricePerKilo = pricePerKilo;
    this._grams = grams;
  }

  get types() {
    return this._types;
  }

  set types(type) {

     this._types = type;
     console.log( `we now bake ${this._types}`);
  }



  price(x,y) {
    this.pricePerKilo = x;
    this.grams = y;
    return (x * y) / 1000;
  }
}

const _bread = new Bread("Classic pastries", "Rue Art-loi 301", 8, 18, [
  "multiGrain",
  "wholeGrain",
  "whiteBread",
  "glutenFree",
]);

console.log(_bread.price(3, 600));
console.log(_bread.types);
console.log(_bread.types = 'rye bread')


// ----------------------------------------------------------------------------------------------------

class Baguette extends Bread {
  constructor(name, address, open, close, baguette, price, quantity, bakeSession) {
    super(name, address, open, close);
    this._baguette = baguette;
    this._price = price;
    this._quantity = quantity;
    this._glutenFree = false;
    this._bakeSession = bakeSession;
  }
  

  price (a, b) {
    this._price = a;
    this._quantity = b;
    return a * b;
  }

  timetable (bakeSession) {
     
      if ( bakeSession >= 7 && bakeSession < 9 ) {
        console.log(`we have just baked fresh baguettes!`);
      } else if ( bakeSession >= 14 &&  bakeSession < 16 ) {
        console.log(`Afternoon goodies are here!`);
      } else {
        console.log(`wait untill next bake session...`);
      }
  }

  size () {
     this.smallSize = 'small';
     this.bigSize = 'big';
      console.log(`Our famous baguettes are baked in ${this.smallSize} and ${this.bigSize} sizes`)
  }
}

const _baguette = new Baguette("My Bread", "Grande Place 353", 7, 17);

// QQQ --- why there are so manny inherited things from class "bakery" and how to get rid some of them if I don't need?

console.log(_baguette);
console.log(_baguette.price(1.75,5));
console.log(_baguette.size())
console.log( _baguette.timetable(15));




