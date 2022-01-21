require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const createError = require("http-errors");

const { connectDatabase } = require("./config/connectDatabase");
const uploadFile = require('./utils/uploadExcel');
const { checkImportData } = require("./middlewares/checkImportData");

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false  }));
app.use(express.json());

// app.use(express.static(path.join(__dirname, 'uploads')))

app.post("/importExcel", uploadFile.single('file1'), checkImportData, (req, res, next) => {
    try {
        return res.json({data: res.locals.data})

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
