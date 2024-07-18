const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: String,
  weight: Number,
  description: String,
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project'
  }
});

const Task = mongoose.model('Task', projectSchema);

module.exports = Task;
