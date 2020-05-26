const express = require('express');
const crypto = require('crypto');
const routes = express.Router();

routes.post('/ongs',(Request,Response)=> {
     const {name} = Request.body;
     
     console.log(name);
    const id = crypto.randomBytes(4).toString('Hex');
    return Response.json({name});
});
routes.get('/ongs',(Request,Response)=> {
   const id = crypto.randomBytes(4).toString('Hex');
   console.log(id);
   return Response.json({id});
});
   module.exports = routes;
