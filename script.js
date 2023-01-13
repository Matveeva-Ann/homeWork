function CoffeeMake (water, milk, coffee){
    this.water = water;
    this.milk = milk;
    this.coffee = coffee;
}
CoffeeMake.prototype.on = function (){
    console.log('coffee machine - on');
} 
CoffeeMake.prototype.off = function (){
    console.log('coffee machine - off');
} 
const coffe1 = new CoffeeMake('Morshynska', 'milk', 'Arabica');
coffe1.on();
coffe1.off();
console.log(coffe1);


function CapsuleCoffeeMachine (water, milk, coffee, work){
    CoffeeMake.call(this, water, milk, coffee);
    this.work = work;
}
CapsuleCoffeeMachine.prototype = Object.create(CoffeeMake.prototype);
CapsuleCoffeeMachine.prototype.some = function(){
    console.log('some prototype');
}
const capsuleCoffe = new CapsuleCoffeeMachine ('Buvette', 'milk', 'Maragojip', 'works');
capsuleCoffe.on();
capsuleCoffe.off();
capsuleCoffe.some();
console.log(capsuleCoffe)

function CornishCoffeeMachine (water, milk, coffee, work, horn){
    CapsuleCoffeeMachine.call(this, water, milk, coffee, work);
    this.horn = horn;
}
CornishCoffeeMachine.prototype = Object.create(CapsuleCoffeeMachine.prototype);
CornishCoffeeMachine.prototype.someNew = function (){
    console.log('someNew prototype');
}
const cornishCoffe = new CornishCoffeeMachine('Borjomi', 'milk', 'Bourbon', 'works', 'includes');
cornishCoffe.on();
cornishCoffe.off();
cornishCoffe.some();
cornishCoffe.someNew();
console.log(cornishCoffe)


function CoffeeMachine (water, milk, coffee, work, sugar){
    CapsuleCoffeeMachine.call(this, water, milk, coffee, work);
    this.sugar = sugar;
}
CoffeeMachine.prototype = Object.create(CapsuleCoffeeMachine.prototype);
CoffeeMachine.prototype.new = function(){
    console.log('new prototype');
}
const coffeeMachine = new CoffeeMachine('Borjomi', 'milk', 'Bourbon', 'works', 'Sugar');
coffeeMachine.on();
coffeeMachine.off();
coffeeMachine.some();
coffeeMachine.new();
console.log(coffeeMachine)