/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
Make an array named quotes
***/
let quotes = [
{ 
  quote: 'Do your best until you know better. Then when you know better, do better',
  source: 'Maya Angelou'
},
{
  quote: 'I am not afraid of storms, for I am learning how to sail my ship.',
  source: 'Louisa May Alcott',
  citation: 'Little Women'
},
{
  quote: 'There are always new, grander challenges to confront, and a true winner will embrace each one.',
  source: 'Mia Hamm'
},
{
  quote: 'We can push ourselves further. We always have more to give.',
  source: 'Simone Biles'
},
{
  quote: 'Passion first and everything will fall into place.',
  source: 'Holly Holm'
},
{
  quote: 'The potential for greatness lives within each of us.',
  source: 'Wilma Rudolph',
  year: 2015
}

];



/***
 * `getRandomQuote` function
***/
//the function should return a random quote object using the random number variable above and bracket notation on the quotes array
function getRandomQuote (array){
   let quoteNumbers = Math.floor(Math.random() * quotes.length); 
    let displayQuotes = array[quoteNumbers];
    console.log(displayQuotes)
    return displayQuotes
};

getRandomQuote(quotes);
//for (let i = 0; i<quotes.length; i++){}


/***
 * `printQuote` function
***/
function printQuote(){
  let randomQuotes = getRandomQuote;
    html += 
      <p class="quote"> `${quotes.quote}` </p>
      <p class="source"> `${quotes.source}` </p>


};

// <h2>${quotes.quote}</h2>
//    <h3>${quotes.source}</h3>
//     <p>${quotes.citation}</p>
//     <p>${quotes.year}</p>`

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);