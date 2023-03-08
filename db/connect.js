const mongoose = require("mongoose");

const connectDB = (uri) => {
    console.log("Connect to DB");
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports = connectDB;