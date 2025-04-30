'use strict';

const Models = require('../models');

const getUser = (res) => {
    Models.User.findAll({}).then(data => {
        res.send({result:200, data: data});
    }).catch(err => {
        console.log(err);
        res.send ({result:500, error: err.message})
    })
}

const getUserByEmail = (email, res) => {
  Models.User.findOne({ where: { email } })
    .then(user => {
      if (user) {
        res.send({ result: 200, data: user });
      } else {
        res.status(404).send({ result: 404, error: "User not found" });
      }
    })
    .catch(err => {
      res.status(500).send({ result: 500, error: err.message });
    });
};

const createUser = (data, res) => {
    Models.User.create(data).then(data => {
        res.send({result:200, data: data});
    }).catch(err => {console.log(err);
        res.send({result:500, error: err.message});
    })
}

const updateUser = (req, res) => {
    Models.User.update(req.body, { where: { id: req.params.id }, 
  returning: true })
      .then(data => {
        res.send({ result: 200, data: data });
      }).catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
      });
   };

const deleteUser = (req, res) => {
    Models.User.destroy({ where: { id: req.params.id } })
      .then(data => {
        res.send({ result: 200, data: data });
      }).catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
      });
   };

module.exports ={
    getUser, createUser, updateUser, deleteUser, getUserByEmail
}