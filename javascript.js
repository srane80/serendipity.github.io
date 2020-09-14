var quotes = [
    "I'm good with hands and multitasking",
    "This would've been more enjoyable if you were here",
    "It kinda hurts more now",
    "I CAN'T WALK", 
    "You're too afraid for me to come",
    "So I'm active, but not necessarily with you",
    "When does it come out?",
    "I pulled it open just enough for Aryan to slip his finger in",
    "I don't care, I'll take it",
    "Daddy, come through",
    "Don't put it all on me",
    "Watch me eat it",
    "Yes, I'm doing it!",
    "I'll ride you?",
    "I'll go bottom, you go top",
    "Oh, I thought we were just gonna keep going",
    "Oh my god, I thought you finished!",
    "That. Took. So. Long.",
    "I'm too much for you to handle",
    "PLEASE DO",
    "I still feel the weird feeling in my stomach",
    "You went on either way",
    "I figured, cuz you got repetitive",
    "How am I so good at this, wow",
    "Ok, sugar mama",
    "GET THAT IMAGE OUT OF MY HEAD",
    "Bendy :)",
    "RAWR",
    "Not as good as me"
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
