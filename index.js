import express from "express";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const app=express();
const port = 3000;
const db=new pg.Client({
    host:process.env.Pg_host,
    user:process.env.Pg_user,
    database:process.env.Pg_db,
    password:process.env.Pg_password,
    port:5432
});


app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));

db.connect();

app.get("/",async(req,res)=>{
    try{
        const result=await db.query("select * from post");
        var post=[];
        result.rows.forEach((row)=>{
            post.push(row);
        });
        res.render("index.ejs",{posts:post});
    }
    catch(err){
        console.log(err);
    }
});
app.get("/createform",(req,res)=>{
    res.render("form.ejs",{heading:"CREATE BLOG",action:"create"})
});
app.post("/editform",async (req,res)=>{
    const id=req.body.id;
    const result=await db.query("select * from post where id=($1)",[id]);
    var posts=result.rows[0];
    res.render("form.ejs",{heading:"EDIT BLOG",action:"edit",post:posts});
});
app.post("/create",async(req,res)=>{
    const title=req.body.title;
    const author=req.body.author;
    const content= req.body.content;
    const date=new Date();
    try{
        await db.query("INSERT INTO post(title,author,content,modify_date) values($1,$2,$3,$4);",[title,author,content,date]);
        res.redirect("/");
    }
    catch(error){
        console.log(error);
    }
});
app.post("/edit",async(req,res)=>{
    const id=req.body.id;
    var title=req.body.title;
    var author=req.body.author;
    var content=req.body.content;
    var date=new Date();
    try{
        await db.query("UPDATE post SET title=($1),author=($2),content=($3),modify_date=($4) WHERE id=($5)",[title,author,content,date,id]);
        res.redirect("/");
    }
    catch(error){
        console.log(error);
    }
});
app.post("/del",async(req,res)=>{
    const id=req.body.id;
    try{
        await db.query("DELETE FROM post WHERE id=$1",[id]);
        res.redirect("/");
    }
    catch(error){
        console.log(error);
    }
});
app.listen(port,()=>{
    console.log(`the server is listening port : ${port}`);
})