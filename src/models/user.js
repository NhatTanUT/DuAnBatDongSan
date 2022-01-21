const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    ten: {
        type: String,
        required: true
    },
    chucVu: {
        type: String,
        enum: ['nhanvien', 'quanly'],
        required: true
    }
}, {timestamp: true})

module.exports = new userSchema()