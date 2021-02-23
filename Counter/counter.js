var counter = document.querySelector(".counter");
var Counting = document.querySelector(".Counting");

let count = 1;
setInterval(() => {
  if (count < 1000) {
    count++;
    counter.innerText = count;
  }
}, 1);

setTimeout(() => {
    Counting.innerText = "Reached Your Target";
}, 5000);
