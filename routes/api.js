const router = require('express').Router();
const Student = require('../models/student');

router.get('/students', (req, res, next) => {
  Student.find({})
    .then((students) => res.send(students))
    .catch(next);
});

router.post('/students', (req, res, next) => {
  Student.create(req.body)
    .then((student) => res.send(student))
    .catch(next);
});

router.put('/students/:id', (req, res, next) => {
  Student.updateOne({ _id: req.params.id }, req.body)
    .then(() =>
      Student.find({ _id: req.params.id }).then((student) => res.send(student))
    )
    .catch(next);
});

router.delete('/students/:id', (req, res, next) => {
  Student.deleteOne({ _id: req.params.id })
    .then((student) => {
      res.send(student);
    })
    .catch(next);
});

module.exports = router;
