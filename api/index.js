const express = require("express");
const router = express.Router();
const admin = require('./routes/admin')
const PORT = process.env.PORT || 3500;

const app = express();

app.use('/admin', admin)

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get("/ping", (req, res) => {
    res.json({message: "pong"})
})