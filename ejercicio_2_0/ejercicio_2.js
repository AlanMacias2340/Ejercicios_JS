function createUser(name){
    let id = Math.random();
    return{
        id:id,
        name,
    }
}

let user = createUser('felipe');
let user2 = createUser('chanchito');
console.log(user,user2);