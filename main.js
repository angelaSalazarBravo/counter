
const button_decr = document.getElementsByClassName('btn')[0];
const numberElement = document.querySelector('h1.number');
let count = 0; 
button_decr.addEventListener('click', function() {
  
  count -= 1;
  numberElement.textContent = count;
});

const button_reset = document.getElementsByClassName('btn')[1];
button_reset.addEventListener('click', function() {
  
  count = 0;
  numberElement.textContent = count;
});

const button_sum = document.getElementsByClassName('btn')[2];
button_sum.addEventListener('click', function(){

  count += 1;
  numberElement.textContent = count;
});

/*
const count_literal = {
  reset: () => {
    count = 0;
    return count;
  },
  increase: () => ++count;
  decrease: () => --count;
}



butttons.foreach((buton) => {
    button.addEventListener("click, () => 
      account.textcontent = count_literal[button.textcontent]();
    });

*/