const express= require("express");
const app=express();

app.get("/",(req,res)=>{
    res.send(
        "<h1>NodeJs Program Via Docker Output below</h1>"
        +"<h2>student data  <h2>"
        +"<h4>rollNo : 101 <h4>"
        +"<h4>name : Mrunal <h4>"
        +"<h4>class : VII <h4>"
        +"<h4>divison : B <h4>"
        
    )
});

app.get("/aboutus",(req,res)=>{
    res.send(
        "<h1> LVH Acadamy English Mediam School </h1>"
        +"<h2>CEO : Mr. Prashant Hire </h2>"
        +"<h3>Principle : Mr. H.V. Hire<h3>"
        +"<h3>Address : College stop , Malegaon camp , Malegaon</h3>"
        +"<h3>Pin : 433205 </h3>"
        +"<h3>Contacts : lvh@gamil.com,214865248</h3>"
       
    )
})



const server=app.listen(9000);
console.log("listen server at 9000 ");