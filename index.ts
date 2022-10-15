import bodyParser from "body-parser";
import mongoose from "mongoose";
import Server from "./classes/server";
import defaultRoutes from "./routes/defaul.routes";
import smartphoneRoutes from "./routes/smartphone.routes";

const server = new Server();

server.app.use(bodyParser.json());
server.app.use(bodyParser.urlencoded({extended:true}));

server.app.use('/',defaultRoutes);
server.app.use('/smartphone',smartphoneRoutes);

mongoose.connect('mongodb+srv://usr_smartphone:<comecaca88A>@cluster0.dvq2u4m.mongodb.net/smartphonesDb',(error)=>{
    if(error){
        throw error;
    }

    console.log('Base de datos online');
})

server.Start(()=>{
    console.log(`Servidor corriendo en puerto ${server.port}`);

})