const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controller/SessionController');
const PostController = require('./controller/PostController');



const routes = express.Router();
const upload = multer(uploadConfig);


routes.post('/sessions', SessionController.store);
routes.post('/posts', upload.single('thumbnail'),PostController.store);


module.exports = routes;