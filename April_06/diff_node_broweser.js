const x = setTimeout(function exec() {
     console.log("complete timer");   
}, 1000);

console.log(x);
clearTimeout(x);