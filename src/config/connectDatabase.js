const mongoose = require("mongoose");

const connectDatabase = async () => {
    try {
        mongoose.connect("mongodb://localhost:27017/duanbatdongsan", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to database");
    } catch (error) {
        console.log(error);
    }
};

module.exports = {connectDatabase}