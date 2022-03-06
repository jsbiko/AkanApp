//ARRAY for days of week
const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

// Akan Male and Female names
const NAMES = {
    "male":
    {
        "Sunday": "Kwasi",
        "Monday": "Kwadwo",
        "Tueday": "Kwabena",
        "Wednesday": "Yaw",
        "Thursday": "Kofi",
        "Friday": "Kwabena",
        "Saturday": "Kwame",
    },
    "female":
    {
        "Sunday": "Akosua",
        "Monday": "Adwoa",
        "Tuesday": "Abenaa",
        "Wednesday": "Akua",
        "Thursday": "Yaa",
        "Friday": "Afua",
        "Saturday": "Ama"
    }
}

//Declaring variables
let birthday = document.getElementById('birthday');
let gender = document.getElementById('gender');
let submitAkan = document.getElementById('submit-akan');
let results = document.getElementById("result-name");

// Form Events
submitAkan.onclick = (Event) => {
    Event.preventDefault();
    let genderValue = gender.options[gender.selectedIndex].value;
    let birthdayValue = birthday.value;

 //some conditions here   
    if (!birthdayValue || !genderValue) {
        alert("All fields are needed!")
    }
    else {
        //get day of week from birthday
        let officialBirthday = new Date(birthdayValue)
        let day = DAYS[officialBirthday.getDay()];

        if (genderValue === "male") {
            let akanName = NAMES.male[day];
            // console.log(akanName);
            results.innerHTML = akanName;
        }
        else {
            let akanName = NAMES.female[day];
            // console.log(akanNme);
            results.innerHTML = akanName;
        }
    }
}
