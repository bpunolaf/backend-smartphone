import { Document, model, Schema } from "mongoose";


const smartphoneSchema = new Schema({
        modelo:{
            type : String,
            require : [true,'El modelo es requerido']
        },
        modeloReal:{
            type : String
        },
        caracteristicaModelo:{
            type : String
        },
        imagen:{
            type : String,
            required : [true,'La imagen es requerida']
        }
    });

    interface ISmartphone extends Document{
        modelo:string;
        modeloReal:string;
        caracteristicaModelo:string;
        imagen:String;
    }

    export const Smartphone = model<ISmartphone>('Smartphone',smartphoneSchema);