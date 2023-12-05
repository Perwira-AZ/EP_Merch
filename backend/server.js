require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const http = require('http');
const userRoutes = require('./routes/userRoutes');
const teamRoutes = require('./routes/teamRoutes');
const notifRoutes = require('./routes/notifRoutes');
const { deleteNotif } = require('./controllers/notifController');

const app = express();

// middleware
app.use(express.json());

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb', parameterLimit: 50000 }));

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

const autoDelete = () => {
  deleteNotif();
};

setInterval(autoDelete, 24 * 60 * 60 * 1000);

// routes
app.use('/api/user', userRoutes);
app.use('/api/teams', teamRoutes);
app.use('/api/notif', notifRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for request
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port ', process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
