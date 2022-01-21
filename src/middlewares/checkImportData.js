var xlsx = require("node-xlsx");
const createError = require("http-errors");

const checkImportData = (req, res, next) => {
    
    try {
        if (req.file == undefined) {
            return res.status(400).send("Please upload an excel file!");
        }
        // console.log(req.file);
        var obj = xlsx.parse(req.file.path);
        res.locals.data = obj
        next()
    } catch (error) {
        console.log(error);
        next(createError(400, {msg: error.message}))
    }
};

module.exports = { checkImportData };
