const mongoose = require('mongoose')

const datSchema = mongoose.Schema({
    loaiDuong: {
        type: String,
        required: true
    },
    soNha: {
        type: String,
        required: true
    },
    tenDuong: {
        type: String,
        required: true
    },
    xaPhuong: {
        type: String,
        required: true
    },
    quanHuyen: {
        type: String,
        required: true
    },
    ngangKV: {
        type: Number,
        required: true
    },
    daiKV: {
        type: Number,
        required: true
    },
    dienTich: {
        type: Number,
        required: true
    },
    giaBan: {
        type: Number,
        required: true
    },
    tinhTrangSoHong: {
        type: String,
        required: true
    },
    ghiChuThayDoiGia: {
        type: String,
        required: true
    },
    ghiChuDaBan: {
        type: String,
        required: true
    },
    khachHang: {
        type: String,
        required: true
    },
    dienThoai: {
        type: String,
        required: true
    },
    capDo: {
        type: String,
        required: true
    },
    nguon: {
        type: String,
        required: true
    },
    huong: {
        type: String,
        required: true
    },
    cvMoiGioi: {
        type: String,
        required: true
    },
    phiMoiGioi: {
        type: Number,
        required: true
    },
    nhuCau: {
        type: String,
        required: true
    },
    soDK: {
        type: String,
        required: true
    },
    ngayDK: {
        type: Date,
        required: true
    },
    ngayCN: {
        type: Date,
        required: true
    },
    dienGiai: {
        type: String,
        required: true
    },
    chiaSe: {
        type: String,
        required: true
    },
    hienThiWeb: {
        type: Boolean,
        required: true
    }
}, {timestamp: true})

module.exports = new datSchema()