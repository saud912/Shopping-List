// *******  Declaring the variables ********* /////
var button = document.getElementById("Enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var container = document.getElementsByClassName('container')[0];
var clearButton = document.getElementById("sec")

//******  Check the input length  *******/
function inputlength(){
  return input.value.length;
}
// ****** Create the new list element ****** //
function CreatenewElement(){
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  li.classList.add("li");
  input.value = ""
  var delButton = document.createElement("button");
  delButton.innerHTML = "X";
  li.appendChild(delButton);
  delButton.addEventListener("click",DeleteList);
  delButton.classList.add("DelButton");

}

//******** create List Element on Click  ********////
function CreateElementOnclick(){
  if (inputlength() > 0) {
    CreatenewElement();
  }

};
//// ***** Create List Element by Pressing Enter key ***** ///

function CreateonEnter(event){
  if(inputlength() > 0 && event.which === 13){
    CreatenewElement();
  }
}

//****  Line trough(i.e Done ) On clicking the li element  ****** ///


function ToogleClick(event){
  var element = event.target
  element.classList.toggle("done")
}

//  *** Deleting function ***** ////
function DeleteList(event){
  event.target.parentNode.remove(); ///here the li is parent and button is child as it is attched to li
}

function ClearList(event){
  ul.innerHTML = "";
}

clearButton.addEventListener("click",ClearList);



/// *** Action ****** ///
button.addEventListener("click",CreateElementOnclick);
input.addEventListener("keypress",CreateonEnter);
ul.addEventListener("click",ToogleClick);
