import mongoose from "mongoose";
import preProjectModel from "../models/pre-project.model.js";

let id = 2000;

export const createPreProject = (req, res) => {
  const project = preProjectModel(req.body);
  project._idProject = new mongoose.Types.ObjectId(id);
  project
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json({ messege: err }));
    id++;
};

export const getPreProjects = (req, res) => {
  preProjectModel
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.json({ messege: err }));
};

export const getPreProject = (req, res) => {
  const { id } = req.params;
  preProjectModel
    .findById(id)
    .then((data) => res.json(data))
    .catch((err) => res.json({ messege: err }));
};

export const updatePreProject = (req, res) => {
    const { id } = req.params;
  const { title,descipcion, items, infoProject } = req.body;

  preProjectModel
    .updateOne(
      { _id: id },
      { $set: { title,descipcion, items, infoProject } }
    )
    .then((data) => res.json(data))
    .catch((error) => res.json({ messege: error }));
};

export const deletePreProject = (req, res) => {
    const { id } = req.params;
  preProjectModel
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((err) => res.json({ messege: err }));
};
