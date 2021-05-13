const express = require('express');
const mongoose = require('mongoose');
const apiRouter = require('./routes/api');
const app = express();

app.get('/api', (req, res) => {
  res.send("It's working");
});
// Middleware
app.use(express.static('public')); // <-- serve static files
app.use(express.json()); // <-- parse the response send or received from DB
app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message }); // <-- handle the errors that occurred during the operations.
});

app.use('/api', apiRouter);

// DB connection
const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose
  .connect('mongodb://localhost/crud_tuto', options)
  .then(() => console.log('Connected to the DB'))
  .catch((err) => {
    console.log('Connection to DB failed', err);
  });
mongoose.Promise = global.Promise;

// Setting PORT
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log('App running on port:', PORT);
});
