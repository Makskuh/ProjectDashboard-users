const { Schema, model } = require('mongoose');

const projectSchema = new Schema(
  {
    title: { type: String, required: true },
    text: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  },
  { timestamps: true }
);

const Project = model('Project', projectSchema);

module.exports = Project;