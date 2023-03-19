require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect")

const PORT = process.env.PORT || 5000;

const products_routes = require("./routes/Products")

// app.get("/", (req, res) => {
//     res.send("Hi, I am live");
// });

app.use("/api/products", products_routes)

const start = async () => {
    try {
        await connectDB(process.env.MONGO);
        app.listen(PORT, () => {
            console.log(`${PORT} yes i am connected`);
        });
    } catch (error) {
        console.log(error);
    }
}

start();