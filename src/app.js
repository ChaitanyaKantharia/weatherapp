const port = process.env.PORT || 3000;
const express = require('express');
const app = express();
const path = require('path');

const staticpath = path.join(__dirname,'../public');
const partialpath = path.join(__dirname,'../viewspartials');

app.use(express.static(staticpath));
const hbs = require('hbs');
hbs.registerPartials(partialpath);
app.set('view engine','hbs');

app.get('/',(req,res)=>{
    res.render("index");
});

app.get('/about',(req,res)=>{
    res.render("about");
});

app.get('/weather',(req,res)=>{
    res.render("weather");
});  

app.get('*',(req,res)=>{
    res.render("404");
});

app.listen(port,()=>console.log(`server listing on : ${port}`));