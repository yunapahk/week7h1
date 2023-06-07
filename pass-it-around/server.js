const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send(`<h1>99 Bottles of beer on the wall</h1><br>
    <a href="/98">take one down, pass it around</a><br>
    <a href="/">StartOver</a>`);
})

app.get("/:number_of_bottles", (req, res) => {
    let bottles = Number(req.params.number_of_bottles);
    if (bottles > 0) {
        res.send(
        `<h1>${bottles} Bottles of beer on the wall.</h1><br>
        <a href="${bottles - 1}">take one down, pass it around</a><br>
        <a href="/">StartOver</a>`)
    } else {
        res.send(`<h1>No more bottles of the beer on the wall.</h1><br>
        <a href="/">StartOver</a>`);
    }
})

// Bonus
// Did not display in url 
app.get('/bugs', (req, res) => {
    res.redirect('/bugs/99');
});

app.get('/bugs/:number_of_bugs', (req, res) => {
    let bugs = parseInt(req.params.number_of_bugs);
    let nextBugs;
  if (bugs > 0) {
    nextBugs = bugs - 1 + Math.floor(Math.random() * 30);
  } else {
    nextBugs = 0;
}

  if(bugs > 0){
        res.send(`${bugs} little bugs in the code <br> 
        <a href="/bugs/${nextBugs}">Take one down, patch it around</a> <br> 
        <a href="/bugs/99">start over</a>`);
    } else {
        res.send(`No more bugs in the code <br> <a href="/bugs/99">start over</a>`);
    }
});

// Fibonacci 
function generateFibonacci(num) {
    let fibo = [0, 1];
    while(fibo[fibo.length - 1] <= num) {
        fibo.push(fibo[fibo.length - 2] + fibo[fibo.length - 1]);
    }
    return fibo;
}

app.get('/fibonacci/:number', (req, res) => {
    const number = parseInt(req.params.number);
    const fiboSeries = generateFibonacci(number);
    let result;
    if (fiboSeries.includes(number)) {
        result = "Very good. It is Fibonacci.";
    } else {
        result = "I can tell this is not a fibonacci number.";
    }
    res.send(result);
});

  


// I used 3001 because it seemed to be conflicting with my other server.js files that are in 3000. 
app.listen(3001,() => {
    console.log("Hello, LA. I'm listening...")
})