main();

function main()
{
    // problem1();
    // problem2();
    // problem3();
    problem4();
}


//Write a JavaScript function that accepts a sentence of words all in lowercase,
// and returns every other word in all caps.
// Hint: see toUppercase()



/*
function that accepts a sentence
toUppercase() returns all inputed string to Uppercase letters
use .split to turn each word into a string and put those into an array
use toUppercase()to target item in the array
.map to return values
.reduce to put it back together
you can do it ALLLL TOGETHER
check out .join
 */


function problem1()
{
    let seperateWords = prompt("enter a sentence");


    let wordsReworked = seperateWords.split( " ").map(function(value,index)
        {
            if(index%2 === 0 || index === 0)
            {
                return value;
            }
            else
                {
                    value = value.toLocaleUpperCase();
                    return (value)
                }
        }
        ).reduce(function(startWord,nextWord)
        {
           return startWord + " " + nextWord;
        });
        console.log(wordsReworked);
}

//Write a JavaScript function that accepts a word in all lowercase or in all uppercase
// , and returns the word in the opposite case.
// Hint: see toLowercase()

/*
simple problem from the first problem
 */


function problem2()
{
    let wordToConvert = prompt("I need one Word!");
    if(wordToConvert === wordToConvert.toLocaleUpperCase())
    {
        wordToConvert = wordToConvert.toLocaleLowerCase();
    }
    else
        {
            wordToConvert = wordToConvert.toLocaleUpperCase();
        }
    console.log(wordToConvert);
}

//Write a JavaScript function to get the first n element(s) of an array.
// Passing a parameter 'n' will return the first 'n' elements of the array.
//
// Write a JavaScript function to get the last n element(s) of an array.
// Passing a parameter 'n' will return the last 'n' elements of the array.

/*
slice to look at but not remove
splice to take out

 */



function problem3()
{
    let meats = ["beef","pork","lamb","deer","chicken",];
    function lookingForDeals()
    {
     let checkingout =parseInt(prompt("which isles do you want to check?"));
     console.log(checkingout);
     let itemsOnSale = meats.slice(0,checkingout);
     console.log(itemsOnSale);
    }
    lookingForDeals();
    function leavingTheStore()
    {
        let lastIsle = parseInt(prompt("which isle do you want to check out before we go?"));
        console.log(meats.slice(lastIsle-1,4));

    }
    leavingTheStore();



}

//Write a JavaScript function to remove an element with a specific value from an array.

/*
function can be problem 4
switch case to test which item person wants
pop to set object somewhere else
NEED TO PUT NAME INTO OBJECT TO DISTINGUISH WHAT IT IS OTHERWISE YOU WON'T BE ABLE TO TELL
 */


function problem4()
{
    let books = [bible = {pagecount:1000,covertype:"hard",rating:9},
                 whereTheWildThingsAre ={pagecount: 15, covertype: "paper", rating: 4},
                 blackCompany ={pagecount:300,covertype:"hard",rating:7},];
    switch(prompt("what book do you want to check out?"))
    {
        case"bible" :
            console.log("we have that in stock here you are.");
            var rental = books.pop(bible);
            break;
        case"where the wild things are" :
            console.log("we have that in stock here you are.");
            var rental =books.pop(whereTheWildThingsAre);
            break;
        case"black company" :
            console.log("we have that in stock here you are.");
            var rental =books.pop(blackCompany);
            break;
        default:
            console.log("we do not have that in stock.");
            break;
    }
    console.log(rental);
}