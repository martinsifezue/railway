  let takecount = document.querySelector(".btnn");
  let showcount = document.querySelector(".passenger");

   let count = 0;

  takecount.addEventListener("click", function(){

      count++;

   showcount.innerHTML = count;
  });

let savecount = document.querySelector(".save-btn");

 savecount.addEventListener("click", function(){


   let finalcount = document.querySelector(".previous");

   finalcount.append(count + " - ");

   startAfresh();

 });

function startAfresh(){

showcount.innerHTML = 0;
count = 0


}
