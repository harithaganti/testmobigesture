const express = require('express')
const app = express()
const port = 5000

// Init Middleware
app.use(express.json({ extended: false }));

app.use("/countries", require("./routes/countries"));
//app.use(express.static('public'))

var data = [
    { "label": 1, "value": "Singapore" },
    { "label": 2, "value": "Malaysia" },
    { "label": 3, "value": "Indonesia" },
    { "label": 4, "value": "Phillipens" },
    { "label": 6, "value": "Thailand" },
    { "label": 7, "value": "India" },
    { "label": 8, "value": "Canada" },
    { "label": 9, "value": "Brazil" },
    { "label": 10, "value": "New Zealand" }
  ]

// app.get('/', (req, res) => {
//     //res.send('Hello World!')
//     res.json(data)
//   })


app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });

  
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})