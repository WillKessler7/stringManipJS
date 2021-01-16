mainDiv = document.getElementById("mainDiv");


function myClick() {
    if (typeof(Storage) !== "undefined") {
      localStorage.setItem("myString", document.getElementById("myString").value);
      localStorage.setItem("capOption", document.getElementById("capOption").checked);
      localStorage.setItem("flipOption", document.getElementById("flipOption").checked);
      localStorage.setItem("pigOption", document.getElementById("pigOption").checked);
      localStorage.setItem("len", localStorage.getItem("myString").length);
      localStorage.setItem("lastLetPos", localStorage.getItem("len") - 1);
      localStorage.setItem("newString", localStorage.getItem("myString").split());
      localStorage.setItem("lastLetter", localStorage.getItem("newString")[localStorage.getItem("lastLetPos")]);
    }

    myJSON = {
        "myString": localStorage.getItem("myString"),
        "capOption": localStorage.getItem("capOption"),
        "flipOption": localStorage.getItem("flipOption"),
        "pigOption": localStorage.getItem("pigOption"),
        "len": localStorage.getItem("len"),
        "lastLetPos": localStorage.getItem("lastLetPos"),
        "lastLetter": localStorage.getItem("lastLetter"),
        "newString": localStorage.getItem("newString"),

    }

    localStorage.setItem("formData", myJSON);

    // displays this as a defualt message on the html page
    mainDiv.innerHTML = "\n<h1>Your manipulated text: </h1>\n";

    console.log(myJSON["flipOption"]);
    console.log(myJSON["capOption"]);
    console.log(myJSON["pigOption"]);

    // if the user selected the option where they wanted string to be reversed,
    if (myJSON['flipOption'] == 'true') {

        // makes the string mutable
        myJSON["myString"] =  myJSON['myString'].split('');

        myJSON["newString"] = "";
        // loop begins with the last letter of the myString and it replaces each
        // letter backwards until there is no more letters
        for (var i = myJSON['lastLetPos']; i >= 0; i--) {
            // adds each character in accordance with the for loop
            myJSON["newString"] += myJSON['myString'][i];
        }

    }

    // otherwise, if the user selected the option to capitalize all letters,
    else if (myJSON["capOption"] == 'true') {
        // capitalizes the string
        myJSON["newString"] = myJSON["myString"].toUpperCase();

    }

    // otherwise, because the user didn't select the first two, they must of
    // selected the last option(the pig latin option)
    else {

        // makes the string mutable
        myJSON["newString"] = myJSON["myString"].split('');
        // finds the last letter of the string
        lastLetter = myJSON["newString"][myJSON["lastLetPos"]];
        // deletes the last letter
        myJSON["myString"] = myJSON["myString"].replace(myJSON["lastLetter"], '');
        // creates the string in pig latin by putting the last letter in front,
        // then the string then 'way' at the end
        myJSON["newString"] = myJSON["lastLetter"] + myJSON["myString"] + "way";


    }

    // displays the manipulated string on the website
    mainDiv.innerHTML += myJSON["newString"];

}
