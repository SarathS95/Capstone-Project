'use strict';

const Models = require('../models');

const getPost = (res) => {
    Models.Post.findAll({
      include: [
        {
        model: Models.User, attributes: ['username', 'profilePicture']
      }
],
order: [['createdAt', 'DESC']]
    }).then(data => {
        res.send({result:200, data: data});
    }).catch(err => {
        console.log(err);
        res.send ({result:500, error: err.message})
    })
}

const createPost = async (data, res) => {
  try {
    const newPost = await Models.Post.create(data);
    const fullPost = await Models.Post.findOne({
      where: { id: newPost.id },
      include: [
        { model: Models.User, attributes: ['username', 'profilePicture'] }
      ]
    });

    res.send({ result: 200, data: fullPost });
  } catch (err) {
    console.log(err);
    res.status(500).send({ result: 500, error: err.message });
  }
};


const updatePost = (req, res) => {
    Models.Post.update(req.body, { where: { id: req.params.id }, 
  returning: true })
      .then(data => {
        res.send({ result: 200, data: data });
      }).catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
      });
   };

const deletePost = (req, res) => {
    Models.Post.destroy({ where: { id: req.params.id } })
      .then(data => {
        res.send({ result: 200, data: data });
      }).catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
      });
   };

module.exports ={
    getPost, createPost, updatePost, deletePost
}