const express = require('express'); 
const path = require ('path'); 
const cors = require('cors');
// Part #1 Point 2
const bodyParser=require('body-parser');
// Part #2 Point 6
const nav= [
    {
        link:"/books",
        title:"Books"
    },
    {
        link:"/authors",
        title:"Authors"
    },
    {
        link:"/books/addbook",
        title:"Add Book"
    },
    {
        link:"/authors/addauthor",
        title:"Add Author"
    }
]

const loginRouter = require('./src/routes/loginroute');
const signupRouter = require('./src/routes/signuproute');
const homeRouter = require('./src/routes/homerouter')(nav);// Part #1 Point 3
const booksRouter = require('./src/routes/booksroute')(nav);
const authorsRouter = require('./src/routes/authorsroute')(nav);

const app = new express; 

app.use(cors());// Part #2 Point 7
app.set('views','./src/views'); 
app.set('view engine','ejs'); 


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname , '/public'))); 

app.use('/login',loginRouter); 
app.use('/signup',signupRouter); 
app.use('/home',homeRouter); 
app.use('/books',booksRouter); 
app.use('/authors',authorsRouter); 

const port=5000;

app.get('/',function(req,res){

    res.render('index',{});
    
});



// Part #1 Point 5

app.listen(port,()=>{
    console.log("Server Ready on "+port);
});