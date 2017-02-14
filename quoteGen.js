
var quoteArray = ["0"]

function getRandom(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function insertQuote(quote){
    quoteArray.push(quote)
    console.log("Quote inserted: " + quote)
}

function getQuote(num){
    return quoteArray[num + 1]
}

function getRandomQuote(){
    size = quoteArray.length - 1
    randomQuote = quoteArray[getRandom(1,size)]

    console.log("Random quote returned: " + randomQuote)
    return randomQuote
}

function printRandomQuote(){

    console.log(getRandomQuote())
}

function validateInsert(){
    console.log(quoteArray[quoteArray.length-1])
    var x = document.forms["insert_quote"]["quote"].value;
    if (x == quoteArray[quoteArray.length-1]){
        alert("Successful Insert");
        return false;
    }
}

function validateForm(input) {
    if (input == "") {
        alert("Quote must be filled out");
        return false;
    }
}

function insert(){
    userQuote = document.getElementById("userQuote").value;

    validateForm(userQuote)
    insertQuote(userQuote)
}

//function myFunction() {
//    var x, text;
//
//    // Get the value of the input field with id="numb"
//    x = document.getElementById("numb").value;
//
//    // If x is Not a Number or less than one or greater than 10
//    if (isNaN(x) || x < 1 || x > 10) {
//        text = "Input not valid";
//    } else {
//        text = "Input OK";
//    }
//    document.getElementById("demo").innerHTML = text;
//}
