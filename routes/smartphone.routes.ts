import { request, Request, Response, Router } from "express";
import { Smartphone } from "../models/smartphone.model";


const smartphoneRoutes = Router();

smartphoneRoutes.get('/',async(req:Request,res:Response)=>{

    const smartphone = await Smartphone.find();
    return res.json({
        ok:true,
        smartphone
    })
})


smartphoneRoutes.get('/paging',async(req:Request,res:Response)=>{

    
    let perPage = 5;
    let page = Number(req.query.page) || 1;
    let skip = page-1;
    skip = skip*perPage;
    const smartphone = await Smartphone.find().skip(10).limit(perPage);


    return res.json({
        ok:true,
        smartphone
    })
});

smartphoneRoutes.post('/', (req:Request,res:Response)=>{
    
    const body = req.body;

    const smartphone = {
        modelo:body.modelo,
        modeloReal:body.modeloReal,
        caracteristicaModelo:body.caracteristicaModelo,
        imagen:body.imagen
    }

    Smartphone.create(smartphone).then(smartphoneDb =>{

        return res.json({
            ok:true,
            smartphoneDb
        
        })

    }).catch(err=>{
        return res.json({
            ok:false,
            err
            
        
        })
    })


});

smartphoneRoutes.put('/:id',(req:Request, res:Response)=>{

    const smartphoneId = req.params.id;
    const body = req.body;

    const smartphone = {

        modelo:body.modelo,
        modeloReal:body.modeloReal,
        caracteristicaModelo:body.caracteristicaModelo,
        imagen:body.imagen
        
    }

    Smartphone.findByIdAndUpdate(smartphoneId, smartphone).then(smartphoneDb=>{
        return res.json({
            ok:true,
            smartphoneDb
        })
    })
})

smartphoneRoutes.delete('/',async(req:Request,res:Response)=>{
    const smartphoneId = req.query.id;

    if(!smartphoneId){
        return res.json({
            ok:false,
            msj:"El registro solcitado no existe"
        })
    }

    Smartphone.findByIdAndDelete(smartphoneId).then(Smartphone=>{
        return res.json({
            ok:true,
            msj:"Eliminado correctamente"
        })

    }).catch(err=>{
        return res.json({
            ok:false,
            msj:"El registro solicitado no existe"
        })
    })

})
export default smartphoneRoutes;