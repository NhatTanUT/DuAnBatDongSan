require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const createError = require("http-errors");

const { connectDatabase } = require("./config/connectDatabase");

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res, next) => {
    try {
        var xlsx = require("node-xlsx");

        var obj = xlsx.parse(__dirname + "/data.xlsx"); // parses a file

        // var obj = xlsx.parse(fs.readFileSync(__dirname + "/data.xlsx"));
        return res.json({ msg: obj });
    } catch (error) {
        next(createError(400, {msg: error.message}))
    }
});

app.use((req, res, next) => {
    next(createError.NotFound());
});

// Handle error middleware
app.use((err, req, res, next) => {
    console.log(err);
    console.log(req.body);
    res.status(err.status || 500);
    res.json({ msg: err.message });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
    await connectDatabase();
    console.log("Server is starting at " + PORT);
});
