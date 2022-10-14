"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Smartphone = void 0;
const mongoose_1 = require("mongoose");
const smartphoneSchema = new mongoose_1.Schema({
    modelo: {
        type: String,
        require: [true, 'El modelo es requerido']
    },
    modeloReal: {
        type: String
    },
    caracteristicaModelo: {
        type: String
    },
    imagen: {
        type: String,
        required: [true, 'La imagen es requerida']
    }
});
exports.Smartphone = (0, mongoose_1.model)('Smartphone', smartphoneSchema);
