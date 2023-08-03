const express = require("express");
const router = express.Router();
const admin = require('./routes/admin')
const person = require('./routes/person')
const result = require('./routes/result')
const PORT = process.env.PORT || 3500;

const app = express();

app.use('/admin', admin)
app.use('/person', person)
app.use('/result', result)

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get("/ping", (req, res) => {
    res.json({message: "pong"})
})