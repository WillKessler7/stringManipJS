mainDiv = document.getElementById("mainDiv");
// variable that holds all of the previous entries
var allData = [];

var stringifiedJSON = JSON.stringify(localStorage.getItem("formData"));
var parsedNewString = JSON.parse(localStorage.getItem("formData"));

// the following if statement must be placed here because
// if the user has inputed a value for their string to be manipulated,
if (localStorage.getItem("newString") != "undefined") {


    // print to the webpage that this was their previous result
    mainDiv.innerHTML += "\n<h3>Your previous results:</h3>\n";

    // because the string from last iteration of the program has already been
    // utilized, I need
    localStorage.setItem("previousString", localStorage.getItem("newString"));

    // for previous entry in the list of all of the previous entries
    for (newString in JSON.parse(localStorage.getItem("allData"))) {
        // add to tags for white space
        mainDiv.innerHTML += "<h6></h6>";
        // add the previous string to the website
        mainDiv.innerHTML += JSON.parse(localStorage.getItem("allData"))[newString];
    }

}



function myClick() {
    /*
    Purpose: To save all of my local variables to local storage, and to
    manipulate the inputed string in the requested manner
    Parameters: None
    Returns: None(displays the new string to the website and also saves a lot
    of variables to local storage that will later be passed to the beginning of
    the program outside of the function)
    */

    // if storage is available in the browser the user is using,
    if (typeof(Storage) !== "undefined") {
      // send all of the items to local storage
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


    // displays this as a defualt message on the html page
    mainDiv.innerHTML = "\n<h1>Your manipulated text: </h1>\n";

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
    // defines the string that will be used to display the previous results
    localStorage.setItem("newString", myJSON["newString"])
    // parses the list full of previous strings
    allData = JSON.parse(localStorage.getItem("allData"));
    // adds the newest entry to that list because it was already added
    allData.push(myJSON["newString"]);
    // add it to local storage
    localStorage.setItem("allData", JSON.stringify(allData));


    localStorage.setItem("formData", JSON.stringify(myJSON));


}
