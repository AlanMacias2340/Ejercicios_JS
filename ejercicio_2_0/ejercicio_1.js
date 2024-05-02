function Usuario(name){
    this.name = name;
    this.id = Math.random();
}
let user = new Usuario('felipe');
let user2 = new Usuario('chanchito');
console.log(user, user2)
console.log(user);