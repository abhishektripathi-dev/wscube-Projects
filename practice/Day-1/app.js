// Import the Express framework (used to build web servers)
const express = require("express");

// Create an Express application instance
const app = express();
// “Create an Express application instance” means:

// 👉 You are creating your server object — the main program that will handle requests and send responses.

// Middleware to parse incoming request bodies (form data)
// `extended: false` → uses simple querystring library (no nested objects)
app.use(express.urlencoded({ extended: false }));

// Middleware for handling requests to "/add-product"
// Runs for any HTTP method (GET, POST, etc.)
app.use("/add-product", (req, res, next) => {
    
    // Send an HTML form as response
    // The form submits data to "/product" using POST method
    res.send(`
        <form action="/product" method="post">
            <input type="text" name="title">
            <button type="submit">Add Product</button>
        </form>
    `);
});

// Route handler specifically for POST requests to "/product"
app.post("/product", (req, res, next) => {
    
    // Log the parsed form data (from input name="title")
    // Example output: { title: "some value" }
    console.log(req.body);

    // Redirect the user to the home page after form submission
    res.redirect("/");
});

// Middleware for handling requests to the root "/"
// This will run if no earlier route handled the request
app.use("/", (req, res, next) => {
    
    // Send a simple HTML response
    res.send("<h1>Hello from Express!</h1>");
});

// Start the server and listen on port 3000
app.listen(3000, () => {
    
    // Log message when server starts successfully
    console.log("Server running on port 3000");
});