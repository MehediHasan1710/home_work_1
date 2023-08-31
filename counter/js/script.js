let counter = document.querySelectorAll(".counter");
// console.log(counter);

let arr = Array.from(counter);
console.log(arr);


arr.map((item) => {
  // console.log(item);

  let count = 0;
  function greeting() {
    count++;
    item.innerHTML = count;
    if (count == item.dataset.number) {
      console.log('Time Over');
      clearInterval(stop);
    }
  }
  let stop = setInterval(greeting, item.dataset.speed);
});


