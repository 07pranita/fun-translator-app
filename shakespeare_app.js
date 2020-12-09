
var btnTranslate = document.querySelector('.btn-translate');
var inputText = document.querySelector('#txt-input');
var outputText = document.querySelector('.output');

// var apiSelection = document.querySelector('.list-item-inline');
// var serverURL1 = "https://api.funtranslations.com/translate/groot.json";
// var serverURL2 = "https://api.funtranslations.com/translate/pirate.json";
// var serverURL3 = "https://api.funtranslations.com/translate/shakespeare.json";

// function getTranslationURL(text){
//     if(apiSelection.value == "Groot Speaks"){
//         return serverURL1 + "?" + "text= " + text;
//     }
//     else if(apiSelection.value == "Pirates Speaks"){
//         return serverURL2 + "?" + "text= " + text;
//     }
//     else {
//         return serverURL3 + "?" + "text= " + text;
//     }
// }

var serverURL = "https://api.funtranslations.com/translate/shakespeare.json";

function getTranslationURL(text){
    return serverURL + "?" + "text= " + text;
}

function errorHandler(error){
    console.log("Error occured " + error);
    alert("Something wrong with server. Try again later.");
}

function clickHandler(){
    var txtInput = inputText.value; //taking input

    //calling server for processing
    fetch(getTranslationURL(txtInput))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputText.innerText = translatedText;  //output
    })
    .catch(errorHandler)
    // outputText.innerText = "abs " + inputText.value;
}

btnTranslate.addEventListener("click", clickHandler);
