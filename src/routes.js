const express = require('express');
const crypto = require('crypto');
const routes = express.Router();

routes.post('/ongs',(Request,Response)=> {
     const {name} = Request.body;
     
     console.log(name);
    const id = crypto.randomBytes(4).toString('Hex');
    return Response.json({name});
});
   module.exports = routes;
