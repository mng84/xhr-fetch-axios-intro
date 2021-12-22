const express = require("express")
const app = express()
const ejs = require("ejs");
const PORT = process.env.PORT || 3000;
app.set('view engine', 'ejs')

// Static Middleware 
app.use(express.static('public'))
// app.use(express.static('views'))


// Homepage route
app.get("/", (req, res) => {
    res.render("index")
})






app.listen(PORT)