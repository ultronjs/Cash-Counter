var inputBillAmount = document.querySelector('#input-bill-amount');
var btnProceed1 = document.querySelector("#btn-proceed-1");
var inputGivenAmount
var btnProceed2
var sum = 0 
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
let notes = [2000, 500, 200, 100, 50, 20, 10, 5, 1];
let noteCounter = Array(9).fill(0);


btnProceed1.addEventListener("click",function(){
  if(btnProceed2 == null && inputBillAmount.value > 0  ){
  var input = document.createElement("input");
  var button = document.createElement("button");
  var div = document.getElementById("container-given-amount");
  input.type = "number";
  input.placeholder = "Enter the Given Amount";
  input.id = "input-given-amount";
  button.id = "btn-proceed-2";
  button.innerText = "Proceed";
  btnProceed1.remove();
  div.appendChild(input);
  div.appendChild(button);
  inputGivenAmount = document.querySelector("#input-given-amount");
  console.log(inputGivenAmount.value);
  btnProceed2 = document.querySelector("#btn-proceed-2");
  btnProceed2.addEventListener("click", countNotes)
  }
  else{
    alert("Please Enter the Billed Amount")
  }
})

function createTable(){
  var table = document.getElementById("table-notes");
  var row = document.createElement("tr");
  row.setAttribute("id","notes-row")
  table.appendChild(row)
  var coloumn;
  var coloumnvalue;
  for(i=0;i<noteCounter.length;i++){
    coloumn = document.createElement("td");
    coloumnvalue = document.createTextNode(noteCounter[i])
    coloumn.appendChild(coloumnvalue)
    document.getElementById("notes-row").appendChild(coloumn);
}
  coloumn = document.createElement("td");
  coloumnvalue = document.createTextNode(sum);
  coloumn.appendChild(coloumnvalue);
  document.getElementById("notes-row").appendChild(coloumn);

}



function countNotes(){
  if(inputBillAmount.value > inputGivenAmount.value){
    alert("The Amount Given is less than the Billed Amount")
  }
  else { 
    if(inputGivenAmount.value >0){
      console.log(btnProceed1);
      console.log(inputGivenAmount);
      let amount = inputGivenAmount.value - inputBillAmount.value;
      for (let i = 0; i < 9; i++) {
        if (amount >= notes[i]) {
          noteCounter[i] = Math.floor(amount / notes[i]);
          amount = amount - noteCounter[i] * notes[i];
        }
      }
      for(i=0;i<noteCounter.length;i++){
        sum += noteCounter[i]
      }
        console.log(sum)
        modal.style.display = "block";
        createTable();
        console.log(noteCounter)
      }
      else{
        alert("Please Enter the Given Amount")
      }
  }
    
}

span.onclick = function () {
  modal.style.display = "none";
  document.getElementById("notes-row").remove()
  sum=0;
  noteCounter = Array(9).fill(0);
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.getElementById("notes-row").remove();
    noteCounter = Array(9).fill(0);
    sum=0
  }
}