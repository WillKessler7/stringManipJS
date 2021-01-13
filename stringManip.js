mainDiv = document.getElementById("mainDiv");


function myClick() {
    if (typeof(Storage) !== "undefined") {
      localStorage.setItem("myString", document.getElementById("myString").value);
      localStorage.setItem("capOption", document.getElementById("capOption").checked);
      localStorage.setItem("flipOption", document.getElementById("flipOption").checked);
      localStorage.setItem("pigOption", document.getElementById("pigOption").checked);
      localStorage.setItem("len", localStorage.getItem("myString").length);
      localStorage.setItem("lastLetPos", localStorage.getItem("len") - 1);
      localStorage.setItem("myString", document.getElementById("myString").value);
      localStorage.setItem("lastLetter", "");
      localStorage.setItem("newString", "");
    }
    var capOption = document.getElementById("capOption").checked;
    var flipOption = document.getElementById("flipOption").checked;
    var pigOption = document.getElementById("pigOption").checked;
    var len = myString.length;
    var lastLetPos = len - 1;
    var lastLetter = ""
    var newString = "";

    myJSON = {


    }

    localStorage.setItem("formData", myJSON);

    // displays this as a defualt message on the html page
    mainDiv.innerHTML = "\n<h1>Your manipulated text: </h1>\n";

    // if the user selected the option where they wanted string to be reversed,
    if (flipOption) {

        // makes the string mutable
        myString = myString.split('');

        // loop begins with the last letter of the myString and it replaces each
        // letter backwards until there is no more letters
        for (var i = myString.length - 1; i >= 0; i--) {
            // adds each character in accordance with the for loop
            newString += myString[i];
        }

    }

    // otherwise, if the user selected the option to capitalize all letters,
    else if (capOption) {
        // capitalizes the string
        newString = myString.toUpperCase();

    }

    // otherwise, because the user didn't select the first two, they must of
    // selected the last option(the pig latin option)
    else {

        // makes the string mutable
        newString = myString.split('');
        // finds the last letter of the string
        lastLetter = newString[lastLetPos];
        // deletes the last letter
        myString = myString.replace(lastLetter, '');
        // creates the string in pig latin by putting the last letter in front,
        // then the string then 'way' at the end
        newString = lastLetter + myString + "way";


    }

    // displays the manipulated string on the website
    mainDiv.innerHTML += newString;

}
