let userage;


userage = window.prompt("Enter Your age: ");

if ((userage >= 18) && (userage <= 80)){

 
  document.getElementById("acess").textContent = "Welcome";

}

else if ((userage <= 18) && (userage >= 5)){

  window.alert("you cannot access this website");

}

else if (userage < 5){

  window.alert("you are too young");

}

else if (userage > 80){

  window.alert("you are too old");

}

else {

  window.alert("please enter valid age");
}