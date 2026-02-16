

const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();

app.use(bodyParser.json());

const PORT = 4000;
const SECRET_KEY = "mysecret123";

// FAKE USERS (NO DB)
const users = [
    { id: 1, username: "admin", password: "1234" },
    { id: 2, username: "user", password: "abcd" }
];

// LOGIN ENDPOINT
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    const foundUser = users.find(
        u => u.username === username && u.password === password
    );

    if (!foundUser) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
        { id: foundUser.id, username: foundUser.username },
        SECRET_KEY,
        { expiresIn: "1h" }
    );

    res.json({ token });
});

// SERVER START
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


//JWT Middleware (Optional, for protected routes)
function verifyToken(req ,res , next){
    const header = req.headers['authorization'];

    if(!header){
        return res.status(403).json({ message: " token missing" });
    }

    const token = header.split(" ")[1]; // Assuming "Bearer <token>" format

    jwt.verify(token , SECRET_KEY, (err, decoded) => {
        if(err){
            return res.status(401).json({ message: "Invalid token" });
        }   
        req.user = decoded;
        next();
    });

}

// protected Route
app.get("/dashboard" , verifyToken, (req, res) => {
    res.json({
        message:"Welcome to the dashboard!",
        user: req.user
    });
});    