const express=require('express');
const app=express();
const path=require('path');
const ejsMate=require('ejs-mate');

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))

app.get('/home',(req,res)=>{
    res.render('home');
})

app.get('/login',(req,res)=>{
    res.render('login');
})

app.get('/signup',(req,res)=>{
    res.render('signup')
})


const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Serving on port ${port}`)
})
