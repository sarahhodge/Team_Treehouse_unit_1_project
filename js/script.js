/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.

  Recommended:
    - Add at least one `year` and/or `citation` property to at least one
      quote object.

Array of quote objects with a 'quote', 'source', 'citation' and 'year'
***/
var quotes = [
     { quote: "I love deadlines. I love the whooshing noise they make as they go by.",
       source: "Douglas Adams",
       citation: "The Salmon of Doubt",
       year: 2002
  },
     { quote: "Love is like the wind, you can't see it but you can feel it.",
       source: "Nicholas Sparks",
       citation: "A Walk to Remember",
       year: 1999
  },
     { quote: "The marks humans leave are too often scars.",
       source: "John Green",
       citation: "The Fault in Our Stars",
       year: 2012
  },
     { quote: "A brave man acknowledges the strength of others.",
       source: "Veronica Roth",
       citation: "Divergent",
       year: 2011
  },
     { quote: "Frying chicken always makes me feel a little better about life.",
       source: "Kathryn Stockett",
       citation: "The Help",
       year: 2009
  },
     { quote: "I must learn to be content with being happier than I deserve.",
       source: "Jane Austen",
       citation: "Pride and Prejudice",
       year: 1813
     }

];

/***
  Create the `getRandomQuote` function to:
   - generate a random number
   - use the random number to `return` a random quote object from the
     `quotes` array.
***/

function getRandomQuote(array){
  var randomQuote = array[ Math.floor(Math.random()* array.length)];

  console.log(randomQuote);
  };



/***
  Create the `printQuote` function to:
   - call the `getRandomQuote` function and assign it to a variable.
***/

getRandomQuote(quotes);

/***
   - use the properties of the quote object stored in the variable to
     create your HTML string.
   - use conditionals to make sure the optional properties exist before
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string.
***/




/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

//document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
