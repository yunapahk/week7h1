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

app.listen(3000,() => {
    console.log("Hello, LA. I'm listening...")
})

// Tip Calculatorr