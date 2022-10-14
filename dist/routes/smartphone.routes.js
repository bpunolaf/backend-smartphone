"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const smartphone_model_1 = require("../models/smartphone.model");
const smartphoneRoutes = (0, express_1.Router)();
smartphoneRoutes.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const smartphone = yield smartphone_model_1.Smartphone.find();
    return res.json({
        ok: true,
        smartphone
    });
}));
smartphoneRoutes.get('/paging', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let perPage = 5;
    let page = Number(req.query.page) || 1;
    let skip = page - 1;
    skip = skip * perPage;
    const smartphone = yield smartphone_model_1.Smartphone.find().skip(10).limit(perPage);
    return res.json({
        ok: true,
        smartphone
    });
}));
smartphoneRoutes.post('/', (req, res) => {
    const body = req.body;
    const smartphone = {
        modelo: body.modelo,
        modeloReal: body.modeloReal,
        caracteristicaModelo: body.caracteristicaModelo,
        imagen: body.imagen
    };
    smartphone_model_1.Smartphone.create(smartphone).then(smartphoneDb => {
        return res.json({
            ok: true,
            smartphoneDb
        });
    }).catch(err => {
        return res.json({
            ok: false,
            err
        });
    });
});
smartphoneRoutes.put('/:id', (req, res) => {
    const smartphoneId = req.params.id;
    const body = req.body;
    const smartphone = {
        modelo: body.modelo,
        modeloReal: body.modeloReal,
        caracteristicaModelo: body.caracteristicaModelo,
        imagen: body.imagen
    };
    smartphone_model_1.Smartphone.findByIdAndUpdate(smartphoneId, smartphone).then(smartphoneDb => {
        return res.json({
            ok: true,
            smartphoneDb
        });
    });
});
smartphoneRoutes.delete('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const smartphoneId = req.query.id;
    if (!smartphoneId) {
        return res.json({
            ok: false,
            msj: "El registro solcitado no existe"
        });
    }
    smartphone_model_1.Smartphone.findByIdAndDelete(smartphoneId).then(Smartphone => {
        return res.json({
            ok: true,
            msj: "Eliminado correctamente"
        });
    }).catch(err => {
        return res.json({
            ok: false,
            msj: "El registro solicitado no existe"
        });
    });
}));
exports.default = smartphoneRoutes;
