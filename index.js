/*const input1 = document.getElementById("boy").value;
const input2 = document.getElementById("girl").value;

const merge  = input1.concat(input2);
const lenght = merge.length;
const random = Math.floor(Math.random() * lenght);

let message;

 function myfunction(){
    if(random < lenght){
     message = input1 + "&" + input2 + " matched";
    }
    else if(random > lenght){
     message = input1 + "&" + input2 + "did not match";
    }
}*/

function myfunction() {
    const boyName = document.getElementById("boy").value;
    const girlName = document.getElementById("girl").value;
    const matchResult = matchNames(boyName, girlName);

    document.getElementById("demo").innerHTML = matchResult;
}

function matchNames(boyName, girlName) {
      const length = matchNames.length; 
      // algorithm  for generating response 
      const random = Math.floor(Math.random() * length * 10 / 2);
      if(random < length){
        return "Perfect Match";
      }
      else if(random > length ){
        return "Not a Match";
      } else {
        if(boyName.innerHTML == girlName.innerHTML){
          input.forEach(input =>{
           input.classList.add("border");
          });
        }
      }
  const input = document.querySelectorAll("input");
  if(matchNames(boyName,girlName)){
    input.value == "";
      input.forEach(input => {
       input.classList.add("border");
      });
  }
  else if(input.value === value){
     input.forEach(input =>{
       input.classList.remove("border");
     })
  }
}
useEffect(() => {
input.value == "";
  return () => {
    alert("Welcome back");
  }
}, [console.log(error)])
