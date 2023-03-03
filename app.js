const mongoose=require('mongoose');
const express=require('express');
const bodyparser=require('body-parser');
const { request } = require('express');
const app=express();

app.use(express.static(__dirname+'/public'));
app.set('view engine','ejs');

app.use(bodyparser.urlencoded({extended:true}));
const getDocument= async ()=>
{
    const result= await BlogModel.find();// similar to basica mongo also perform query,projections
    // console.log(result);
    return result;
}
app.get('/',async (req,res)=>
{
    try{
        data=await getDocument();
        console.log(data);
        res.render('index',{dataBase:data});
        }
        catch(err){res.send(err)}
})
app.get('/saved', async (req,res)=>{
    
    
    try{
    data=await getDocument();
    console.log(data);
    res.render('abc',{data1:data});
    }
    catch(err){res.send(err)}

    // res.send();
})
app.post('/addNew',(req,res)=>
{
    const sign1= new BlogModel(
        {
             title:req.body.title,
             description:req.body.description,
             markdown:req.body.markdown,
             date:new Date()
        }
    )
    sign1.save().then(()=>{
        res.render('xy',{dataBase:sign1})
    }).catch((err)=>
    {
        console.log(err);
        res.send("<h2>UNSUCCESSFULL </h2>")
    })
})

app.post('/editBlog',(req,res)=>
{
    res.send("Sorry for Inconvenience !! edit is on working phase");
})

app.get('/login',(req,res)=>
{
    res.render('login');
})

app.get('/addNew',(req,res)=>
{
    res.render('fileejs');
})




mongoose.set('strictQuery',false);
mongourl="mongodb://0.0.0.0:27017/Blogs";
mongoose.connect(mongourl).then
(()=>console.log("connection successfull")).
catch((err)=>console.log(err));

const blogSchema=new mongoose.Schema(
    {
        title:{
            type:String,
        },
        date:String,
        description:String,
        markdown:String,
    }
)

const BlogModel=new mongoose.model("BlogModel",blogSchema);

//  login page 

app.post('/addNew11',async(req,res)=>
{
 try{
    // const title=req.body.title;
    // const description=req.body.description;
    // const markdown=req.body.markdown;
    const userEmail= await signUpModel.findOne({email:email})
    if(userEmail.password===password)
    res.status(201).render('index')
    else
    res.status(401).send("wrong password")
    
 }
 catch(err)
 {
    res.status(400).send(err);
 }
})




app.listen(5000,()=>console.log("server is listen at port 5000 "));
