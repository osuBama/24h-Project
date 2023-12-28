document.addEventListener('DOMContentLoaded', (event) => {
    
 
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

})

document.addEventListener('DOMContentLoaded', (event) => {
   

    const playButton = document.getElementById('playButton');
    const gameIframe = document.querySelector('iframe');

    playButton.addEventListener('click', function () {
        if (gameIframe.requestFullscreen) {
            gameIframe.requestFullscreen();
        }
    });
});

//quote
document.addEventListener('DOMContentLoaded', (event) => {
    console.log("hey");
    const quoteButton = document.getElementById('quote-button');
    const quote = document.getElementById('quoteDisplay');
    quoteButton.addEventListener('click', function(event) {
        event.preventDefault();
        const listOfQuotes = [
            "Best Alarm clock in the world is your mom",
            "Life has many different chapters; never be afraid, just learn and try something new",
            "I tried to be nice, but sometimes my mouth doesn't cooperate",
            "To be a man, you must have honor and a peeeeeeeeeeeeeniiiiiiiiissssssss"
            
        ];
        var randomQuote = listOfQuotes[Math.floor(Math.random() * listOfQuotes.length)];
        quote.textContent = randomQuote;
        console.log("hello");
    });
});

//Game Features
document.addEventListener('DOMContentLoaded'),(event)=>{
    const gameFeatures= document.getElementById('scrollToGame');
  
   gameFeatures.addEventListener('click', function(event){
      event.preventDefault();
      document.getElementById('feature').scrollIntoView({
          behavior:'smooth'
      });
  
    });
  
    };


//about the game
document.addEventListener('DOMContentLoaded'),(event)=>{
  const aboutTheGame= document.getElementById('scrollToAbout');

  aboutTheGame.addEventListener('click', function(event){
    event.preventDefault();
    document.getElementById('about').scrollIntoView({
        behavior:'smooth'
    });

  });

  };



    //storyTelling

    document.addEventListener('DOMContentLoaded', (event) => {
        const storyTelling = document.getElementById('scrollToStory');
  
        storyTelling.addEventListener('click', function (event) {
          event.preventDefault();
          document.getElementById('story').scrollIntoView({
            behavior: 'smooth'
          });
      
        });
      
    });

    
