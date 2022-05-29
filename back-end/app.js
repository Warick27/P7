// dotenv permet d'utiliser des variables d'environnement en lieu et place de données sensibles (mot de passe, mail, etc.)
require("dotenv").config();
// Importation d'express
const express = require('express');

const db = require('./config/db');

const path = require('path');
const bodyParser = require('body-parser')

const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');
const commentRoutes= require('./routes/comment');
const likeRoutes = require('./routes/like');

// Gestion de problèmes de CORS
const cors = require('cors');
// helmet permet de répondre aux exigences OWASP et d'aider à sécuriser les apps Express en colmatant des failles de sécurités connues
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
app.use(express.json());

// Paramètre des headers pour éviter des problèmes de CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
app.options('*', cors());

// Prise en charge du JSON
app.use(bodyParser.json());

// Helmet augmente la sécurité des headers et comble certaines failles de sécurités
app.use(helmet({crossOriginResourcePolicy: false,}));

// Morgan permet de créer des logs
app.use(morgan('combined'));

// Routes
app.use('/api/user',userRoutes);
app.use('/api/post',postRoutes);
app.use('/api/comment',commentRoutes);
app.use('/api/like',likeRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));


module.exports = app;