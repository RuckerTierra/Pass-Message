// Project: input a message and when the submit button is clicked it will display the message
// Step 1: create elements: done
// Step 2: create functions: done
// Step 3: function works with button & keypress: done
// Project: done


// elements
var inputEl = document.getElementById("inputEl");
var submittedMessageEl = document.getElementById("submittedMessage");


// functions 
function displaySubmittedMessage(){
  // console.log("submit button clicked");
  // console.log(inputEl.value);
  submittedMessageEl.innerText = inputEl.value;
  inputEl.value = "";
}

inputEl.addEventListener("keyup", function(event){
  if (event.keyCode === 13){
    submittedMessageEl.innerText = inputEl.value;
    inputEl.value = "";
  }
});
