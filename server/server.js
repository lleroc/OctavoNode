require('./config/config');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/usuarios',(peticion, respuesta)=>{
    respuesta.json("get usuario");
});
app.get('/usuarios/:id',(peticion, respuesta)=>{
    let id = peticion.params.id;
    
});

app.post('/usuarios', function (peticion, respuesta){
    try{
        let body = peticion.body;
        if( body.nombre === undefined || body.edad === undefined)
        {
            respuesta.status(400).json({
                ok: false,
                mensaje:  `no se registran datos  ${ body.nombre }`
            })
        }else{
            respuesta.json(body);
        }
    }catch (e){
        respuesta.json(e);
    }
});
app.put('/usuarios/:id',(req, res)=>{
    let id= req.params.id;
    res.json({id});
});
app.delete('/usuarios',(peticion, respuesta)=>{
    respuesta.json("delete usuarios");
});
app.listen(process.env.PORT,()=>{
    console.log(`Uso del puerto ${ process.env.PORT }`);
});
