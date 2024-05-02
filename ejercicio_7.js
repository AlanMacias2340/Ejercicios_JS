let objeto = {name:'alan'};

function agregarid(obj){
    obj['id']=Math.random();
}

agregarid(objeto);

console.log(objeto);