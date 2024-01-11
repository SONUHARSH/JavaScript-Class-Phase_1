console.log("Hello World");
setTimeout(function exec(){
    console.log("Timer Done");
    setTimeout(function excu1(){
        console.log("Woh another function");
    },0);
}, 1000);

for(let i=0; i<1000; i++){
  // sme task 10s
}
console.log('end call');