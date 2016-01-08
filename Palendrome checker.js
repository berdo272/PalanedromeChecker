"use strict";
function getUserInput(Message){
    var userData;
    userData = window.prompt(Message);
    return userData;
}

function checkItteration(userString){
    var leadingValue;
    var trailingValue;
    var leadingCharacter;
    var trailingCharacter;
    var conditional;

    leadingValue = 0;
    conditional = 1
    trailingValue = userString.length - 1;
    leadingCharacter = userString[leadingValue];
    trailingCharacter = userString[trailingValue];
    while(conditional === 1 && leadingValue < trailingValue){
        if (leadingCharacter === trailingCharacter) {  
        conditional = 1;  
        leadingCharacter = userString[leadingValue++];
        trailingCharacter = userString[trailingValue--];
    } else if (leadingCharacter !== trailingCharacter){
        conditional = 0;
    } 
    return conditional;
    }
}
function displayResult(conditional){
    if (conditional === 1){
        alert("Your input is a Palindrome!");
    } else {
        alert("your input is not a Palindrome");
    }
}

function Main(){
var userString;
var conditional;
userString = getUserInput("please enter what should be checked");
conditional = checkItteration(userString);
displayResult(conditional);
}
Main();