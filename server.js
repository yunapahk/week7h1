const express = require("express")
const app = express()

// GREETINGS
app.get("/greeting", (req, res) => {
    res.send("Hello, stranger")
})

app.get("/greeting/:name", (req, res) => {
    const name = req.params.name
    res.send(`<h1>${name} Hey! What's up?</h1>`)
})

// Tip Calculator
app.get("/tip/:total/:tipPercentage", (req, res) => {
    const total = parseInt(req.params.total);
    const tipPercentage = parseInt(req.params.tipPercentage);


    const tip = total * (tipPercentage / 100);
    res.send(`Your tip amount is: ${tip}`);
    }
);

// url should look like:
// http://localhost:3000/tip/100/20

// Magic 8 Ball
let responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"
]
app.get("/magic/:question", (req, res) => {
    let question = req.params.question
    let response = responses[Math.floor(Math.random() * responses.length)];
    res.send(`<h1>Your question: ${question}. Magic 8 Ball says: ${response}</h1>`);
});
// url should look like:
// Input: http://localhost:3000/magic/Will%20AI%20Take%20Over%20The%20World
// Output: Concentrate and ask again

// Input: http://localhost:3000/magic/Is%20Apple%20Vision%20A%20Flop?
// Output: Outlook not so good
app.listen(3000,() => {
    console.log("Hello, LA. I'm listening...")
})