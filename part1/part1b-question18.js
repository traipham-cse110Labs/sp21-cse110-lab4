function printThis(){
    console.log(time);
}

let d = new Date();
let time = d.toLocaleTimeString();
var timeInterval = setInterval(printThis, 1000);
