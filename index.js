class Cat {
  constructor(name, breed, age, naptime) {
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.favFood = [];
    this.naptime = naptime;
  }
  introduce() {
    return `Hello, my name is ${this.name}`;
  }
  stateNapTime() {
    return `My naptime is: ${this.naptime}`;
  }
  addFood = (food) => {
    this.favFood.push(food);
  }
  loopThroughFoods() {
    this.favFood.forEach(this.logFood);
  }
  // NOTE:
  // Here we can use an arrow function since it will pass the context of 'this' automatically:
  logFood = (food) => {
    console.log(`Hello, my name is ${this.name}, and my favorite food is ${food}`);
  }

}

let jacques = new Cat("Jacques", "domestic short hair", 8, "12 PM EDT");

console.log(jacques.introduce());
console.log(jacques.stateNapTime());
jacques.addFood("cat treats");
jacques.addFood("chicken");
jacques.addFood("canned food");
// console.log("Jacques's new favFood: ", jacques.favFood);
jacques.loopThroughFoods();
