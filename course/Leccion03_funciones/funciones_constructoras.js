
function Course(title) {
    this.title = title;
    this.inscribir = function() {}
}

let objeto = new Course('JavaScript');
let js = new Course('JavaScript');

console.log(objeto);
console.log(js);