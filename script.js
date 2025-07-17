var jokeButton = document.getElementById("jokeButton");
var quoteButton = document.getElementById("quoteButton");
var output = document.getElementById("output");
var title = document.getElementById("title");
var quoteOutput = document.getElementById("quoteOutput");
var jokeOutput = document.getElementById("jokeOutput");
jokeButton.addEventListener("click", getJoke);
quoteButton.addEventListener("click", getQuote);
/*
fetch("https://v2.jokeapi.dev/joke/Any")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    var jokeSetup = data.setup;
    var jokeDelivery = data.delivery;
    jokeOutput.innerHTML = jokeSetup + "\n" + jokeDelivery;
    quoteOutput.innerHTML = ""; // Clear quote output
    if (data.type === "single") {
      jokeOutput.innerHTML = data.joke;
    }
  })
  .catch(function(error) {
    console.error("Something went wrong:", error);
  });*/


function getJoke() {
    console.log("Fetching a random joke...");
    output.style.display = "block";
    
    async function fetchJoke() {
      try{
        jokeOutput.innerHTML = "Loading random joke...";
        jokeButton.disabled = true;
        // fetch data..        
        const response = await fetch("https://v2.jokeapi.dev/joke/Any");
        const data = await response.json();
        jokeButton.disabled = false;

        var jokeSetup = data.setup;
        var jokeDelivery = data.delivery;
        jokeOutput.innerHTML = jokeSetup + "<br>" + jokeDelivery;
        quoteOutput.innerHTML = ""; // Clear quote output
        if (data.type === "single") {
          jokeOutput.innerHTML = data.joke;
        }
      } catch (error) {
        console.error("Error fetching joke:", error);
      }
    }
    fetchJoke();
  }

    function getQuote() {
      console.log("Fetching a random quote...");
      output.style.display = "block";
      quoteOutput.innerHTML = "Loading random quote...";
      fetch("https://dummyjson.com/quotes/random")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var quote = data.quote;
      var author = data.author;
      jokeOutput.innerHTML = ""; // Clear joke output
      quoteOutput.innerHTML = quote + " - " + author;
    })
    .catch(function(error) {
      console.error("Something went wrong:", error);
    });
    }
function toggleOutput() {
    if (output.style.display === "none") {
        output.style.display = "block";
    } else {
        output.style.display = "none";
    }
  }
// Toggle save/unsave state and button text
var saveButton = document.getElementById("saveButton");
saveButton.addEventListener("click", function() {
    if (saveButton.classList.contains("saved")) {
        saveButton.classList.remove("saved");
        saveButton.textContent = "Save";
    } else {
        saveButton.classList.add("saved");
        saveButton.textContent = "Saved";
    }
});