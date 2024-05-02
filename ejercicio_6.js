let obj1 = {id:1, name:'chanchito'};

function crearCopia(obj){
    let newObj ={};
    for (let key in obj){
        newObj[key] = obj[key];
    }
    return newObj;
}

let obj2 = crearCopia(obj1);

console.log({obj1,obj2});