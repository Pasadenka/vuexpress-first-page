// 1.
let sum;
console.log(sum);
// 2.
sum = 10 + 11;
console.log("Sum: " + sum);

// 3. Konstanta se nedá změnit, použil jsem tedy let
let lenght = 1.75;
console.log("Lenght: " + lenght);
// 4.
lenght += 0.1;
console.log("New lenght: " + lenght);
// 5.

// 6.

// 7.
class IceConer {
  constructor(coneType, icecream, count) {
    this.coneType = coneType;
    this.icecream = icecream;
    this.count = count;
  }
  toString() {
    return `You have ${this.coneType} cone with ${this.count} scoops of ${
      this.icecream
    } ice cream.`;
  }
}

let iceConer = new IceConer("black", "vannila", 2);
console.log(iceConer.toString());
// 1.
iceConer.icecream = "mango";
console.log(iceConer.toString());
// 2.
let iceConer2 = iceConer;
console.log(iceConer2);
// 3.
// Příkaz níže vyhodí chybu, protože iceCorner byl už jako instance deklarován
//let iceConer = new IceConer("blue", "chocolate", 5);
console.log(iceConer.toString());
console.log(iceConer2.toString());
