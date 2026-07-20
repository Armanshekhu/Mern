const express = require("express");

app.use(express.json())

const students = [
    {id:1, name:"Tom", age: 22, city:"Delhi"},
    {id:2, name:"Harry", age: 25, city:"Mumbai"},
    {id:3, name:"John", age: 23, city:"Jalandhar"},
    {id:4, name:"Tom", age: 23, city:"Jalandhar"},
]
const app = express();


//  req and res are two object
app.get("/",(req,res) => (
    res.send("response from express server")
))


app.get('/students',(req,res)=>{
    // res.send(students)
    res.json(students);
})

app.get('/students/:id', (req,res) => {
    const studentId = Number(req.params.id)

    const student = students.find(s => s.id === studentId);
    res.status(201)  
    res.json(student);
})

app.get('/students/name/:name/city/:city', (req, res) => {
    const name = req.params.name;
    const city = req.params.city;

    const student = students.find(s => s.name === name && s.city === city);

    res.status(200)
    res.json(student);
});


app.get('/search', (req,res) => {
    const city = req.query.city
    const student = students.filter(s => s.city === city)
    res.json(student)
})


app.listen(3000, () => console.log("Server is running at port 3000"));

// Hashing (One-way)
// -----------------
// Password  ---> Hash      ✅ Possible
// Hash      ---> Password  ❌ Not possible (cannot be reversed)

// Encryption (Two-way)
// --------------------
// Plain Text ---> Encrypted Text (Ciphertext) ✅ Possible
// Encrypted Text ---> Plain Text              ✅ Possible (using the key)

