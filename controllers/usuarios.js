const { response, request } = require('express');


const usuariosGet = (req = request, res) => {
    const {q , nombre, apikey} = req.query;



    res.json({
        data: 'Controller Get', q , nombre , apikey
    });
  }

const usuariosPut = (req, res) => {

    const id = req.params.id;

    res.json({
        data: 'Controller Put', id
    });
  }

const usuariosPost = (req, res) => {

    const {nombre, edad} = req.body;
    res.json({
        data: 'Controller Post', nombre, edad
    });
  }

  const usuariosDelete = (req, res) => {
    res.json({
        data: 'Controller Delete'
    });
  }
  
  const usuariosPatch = (req, res) => {
    res.json({
        data: 'Controller Patch'
    });
  }
  



  module.exports = {
       usuariosGet, 
       usuariosPut,
       usuariosPost, 
       usuariosDelete,
       usuariosPatch}