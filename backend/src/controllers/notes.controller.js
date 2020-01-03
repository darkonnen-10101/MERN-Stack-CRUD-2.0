const notesCtrl = {};

const Note = require('../models/Note');

notesCtrl.getNotes = async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
};

notesCtrl.createNote = async (req, res) => {
  const { title, content, date, author } = req.body;
  const newNote = new Note({title: title, content: content, date: date, author: author});
  await newNote.save();
  res.json({message: 'DONE'});
};

notesCtrl.getNote = async (req, res) => {
  const note = await Note.findById(req.params.id);
  res.json({title: "asdasd"});
};

notesCtrl.updateNote = async (req, res) => {
  const { title, content, author } = req.body;
  await Note.findOneAndUpdate(req.params.id, {title, content, author});
  res.json({message: 'Note updated'});
};

notesCtrl.deleteNote = async (req, res) => {
  await Note.findOneAndDelete(req.params.id);
  res.json({message: 'deleted'});
};

module.exports = notesCtrl;
