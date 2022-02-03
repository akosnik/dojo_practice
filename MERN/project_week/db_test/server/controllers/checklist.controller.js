const Checklist = require("../models/checklist.model");

module.exports.test = (req, res) => {
  res.json({
    message: "Successful connection!",
  });
};

module.exports.getAllChecklists = (req, res) => {
  Checklist.find()
    .then((allChecklists) => {
      res.json({ results: allChecklists });
    })
    .catch((err) => {
      res.json({ message: 'There was an error while getting all checklists', error: err });
    });
};

module.exports.getOneChecklist = (req, res) => {
  Checklist.findOne({ _id: req.params.id })
    .then((oneChecklist) => {
      res.json({ results: oneChecklist });
    })
    .catch((err) => {
      res.json({ message: 'There was an error while getting one checklist', error: err})
    });
};

module.exports.editOneChecklist = (req, res) => {
  Checklist.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
    .then((updatedChecklist) => {
      res.json({ results: updatedChecklist })
    })
    .catch((err) => {
      res.json({ message: 'There was an error while editing one checklist', error: err})
    })
}

module.exports.deleteOneChecklist = (req, res) => {
  Checklist.deleteOne({ _id: req.params.id })
    .then((deletedChecklist) => {
      res.json({ results: deletedChecklist });
    })
    .catch((err) => {
      res.json({ message: 'There was an error while deleting the checklist', error: err})
    });
};

module.exports.createChecklist = (req, res) => {
  Checklist.create(req.body)
    .then((newChecklist) => {
      res.json({ results: newChecklist });
    })
    .catch((err) => {
      res.json({ message: 'There was an error while creating the checklist', error: err})
    });
};
