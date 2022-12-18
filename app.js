const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const port =process.env.PORT || 8000

app.use(express.static(path.join(__dirname,"public")));

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "templates/views"));
hbs.registerPartials(path.join(__dirname, "templates/partials"));


app.get("",(req,res)=>{
    res.render("index");
})

app.get("/about",(req,res)=>{
    res.render("about");
})

app.get("/weather",(req,res)=>{
    res.render("weather")
})

// @ 404 Error page 
app.get("*",(req,res)=>{
    res.render("404Error",{
        errorMsg: `Opps ! Page Not Found`
    })
})

app.listen(port);