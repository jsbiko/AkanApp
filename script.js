// Our Akan Names based on DATE and GENDER inputs

function getAkanName () {
    let dayOfBirth = Number(document.getElementById("dayInput").value);
    let monthOfBirth = Number(document.getElementById("monthInput").value);
    let yearOfBirth = document.getElementById("yearInput").value;

    let genders = document.getElementByName("gender");

// function for get the GENDER 

function getGender () {
    for (let gender of genders){
        if (gender.checked){
            return gender.value;
        }
    }
}

let myGenderValue = getGender();
console.log(myGenderValue);

// INPUT Validation functions
function monthValidator () {
    if (monthOfBirth < 1 || monthOfBirth > 12) {
        return false;
    } else {
        return true;
    }
}

function dayValidator () {
    if (monthOfBirth === 2 && Number(yearOfBirth)%4 === 0) {
        if (dayOfBirth > 28 || dayOfBirth < 1) {
            return false;
        } else if (monthOfBirth === 2 && dayOfBirth > 29) {
            return false;
        } else if (monthOfBirth === 2 && dayOfBirth <1) {
            return false;
        } else {
            return true;
        } 
    } else if (dayOfBirth < 1 || dayOfBirth > 31){
            return false;
        } else {
            return true;
    }
}

//validation variables
let monthValid = monthValidator();
let dayValid = dayValidator();

// Formula to get day of birth e.g Sunday, Mon, Tue, ect..
let dayOfWeekNumber = Math.floor((((Number(yearOfBirth.slice(0,2))/4)-2*Number(yearOfBirth.slice(0,2))-1)+
((5*Number(yearOfBirth.slice(2,4))/4))+((26*(monthOfBirth+1)/10))+dayOfBirth)%7);

// Creating arrays for male and females Akan Names and the day of birth of user
let daysOfWeek = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];

let maleAkanNames = [
    "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"
];

let femaleAkanNames = [
    "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"
];

//generating index value to select items on arrays
let index;
//fix formula bug
if (dayOfWeekNumber == 0) {
    index = 6;
} else {
    index = dayOfWeekNumber - 1;
}

console.log(index);

if (myGenderValue == "male" && monthValid && dayValid) {
    document.getElementById('result').textContent = "Your Akan name is " + maleAkanNames[index] + ", and you were born on a " + daysOfWeek[index];
    document.getElementById('display-akaName').textContent = "Your Akan name: ";
    document.getElementById('result').style.fontSize = "20px";
    document.querySelector('h1').textContent = "Hello" + " " + maleAkanNames[index];
    return false;
} else if (myGenderValue == "female" && monthValid && dayValid) {
    document.getElementById('result').textContent = "Your Akan name is " + femaleAkanNames[index] + ", and you were born on a " + daysOfWeek[index];
    document.getElementById('display-akanName').textContent = "Your Akan Name: ";
    document.getElementById('result').style.fontSize = "20px";
    document.querySelector('h1').textContent = "Hello" + " " + femaleAkanNames[index];
    return false;
} else {
    alert("You entered an invalid day or month, kindly try again");
}}
