const epxress = require('express');
const app = epxress();
const port = 8000;

app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Express.js</title>
    </head>
    <body>
        <h3>Welcome to express.js</h3>
        <b>Express.js fast & furious .....</b>
    </body>
    </html>
    `);
})

app.listen(port, () => {
    console.log("the bluetooth device is connected successfully");
})