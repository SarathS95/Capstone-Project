'use strict';

const Models = require('../models');

const getLike = (res) => {
    Models.Like.findAll({}).then(data => {
        res.send({result:200, data: data});
    }).catch(err => {
        console.log(err);
        res.send ({result:500, error: err.message})
    })
}

const createLike = (data, res) => {
    Models.Like.create(data).then(data => {
        res.send({result:200, data: data});
    }).catch(err => {console.log(err);
        res.send({result:500, error: err.message});
    })
}

const updateLike = (req, res) => {
    Models.Like.update(req.body, { where: { id: req.params.id }, 
  returning: true })
      .then(data => {
        res.send({ result: 200, data: data });
      }).catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
      });
   };

const deleteLike = (req, res) => {
    Models.Like.destroy({ where: { id: req.params.id } })
      .then(data => {
        res.send({ result: 200, data: data });
      }).catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
      });
   };

module.exports ={
    getLike, createLike, updateLike, deleteLike
}