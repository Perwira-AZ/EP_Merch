require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const http = require('http');
const userRoutes = require('./routes/userRoutes');
const teamRoutes = require('./routes/teamRoutes');
const notifRoutes = require('./routes/notifRoutes');

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
  const options = {
    hostname: 'localhost', // Change this to your server's hostname or IP address
    port: process.env.PORT,
    path: '/api/notif/deleteNotif',
    method: 'DELETE',
  };

  const request = http.request(options, (response) => {
    let data = '';
    response.on('data', (chunk) => {
      data += chunk;
    });
    response.on('end', () => {
      console.log('API Response:', data);
    });
  });

  request.on('error', (error) => {
    console.error('Error making API call:', error.message);
  });
  request.end();
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
