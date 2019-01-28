//An array of quotes that will later be randomly generated when printed to a page

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
     { quote: "We would accomplish many more things if we did not think of them as impossible.",
       source: "Vince Lombardi"
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
     { quote: "Before anything else, preparation is the key to success.",
       source: "Alexander Graham Bell"
  }

];

// This function creates a random quote from the quotes array

function getRandomQuote(array){
  var randomQuote = array[ Math.floor(Math.random()* array.length)];

  return randomQuote;
  };


// This function will print a random quote to the page
function printQuote() {
  var random= getRandomQuote(quotes);
  var randomColor= Math.floor(Math.random()*16777215).toString(16);
  var message= "";
      message += '<p class= "quote">' + random.quote + '</p>'
      message += '<p class= "source">' + random.source
      if (random.citation){
          message += '<span class= "citation">' + random.citation + '</span>';
        }
      if (random.year){
          message += '<span class= "year">' + random.year + '</span>';
        } + '</p>'
  document.getElementById("quote-box").innerHTML = message;

  //this is a function that will change the backgound color each time the page refreshes
  // code from https://www.codespeedy.com/generate-random-hex-css-color-code-in-javascript
  function getRandomColor() {
      color = 1 << 24;

      return '#'+(Math.floor(color*Math.random()) + color).toString(16).slice(-6);
   }

  document.body.style.backgroundColor = getRandomColor()
};
printQuote();

//the interval function will reload the quote every 7 seconds
setInterval(printQuote, 7000);


//this is a button that will call the printQuote function
document.getElementById('loadQuote').addEventListener("click", printQuote, false)
