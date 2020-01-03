const notesCtrl = {};

notesCtrl.getNotes = (req, res) => res.json({message: 'GET request'});
notesCtrl.createNote = (req, res) => res.send('POST Notes routes');
notesCtrl.getNote = (req, res) => res.json({message: 'GET request'});
notesCtrl.updateNote = (req, res) => res.send('PUT Notes routes');
notesCtrl.deleteNote = (req, res) => res.json({message: 'DELETE request'});

module.exports = notesCtrl;
