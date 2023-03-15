const express = require('express');

const app = express();

PORT = 8080;

app.get('/', (req, res) => {
    const startingBottles = 99;
    res.send(
      `<div>
        <h1>${startingBottles} Bottles of beer on the wall</h1>
        <a href="/${startingBottles - 1}"><h3>take one down, pass it around</h3></a>
      </div>`
    );
  });
  
app.get('/0', (req, res) => {
      res.send(
        `<div>
          <h1>0 Bottles of beer on the wall</h1>
          <a href="/"><h3>Start over</h3></a>
        </div>`
      );
    });
    
app.get('/:number_of_bottles', (req, res) => {
    const bottles = req.params.number_of_bottles;
    res.send(
      `<div>
        <h1>${bottles} Bottles of beer on the wall</h1>
        <a href="/${bottles - 1}"><h3>take one down, pass it around</h3></a>
      </div>`
    );
  });

  

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
});