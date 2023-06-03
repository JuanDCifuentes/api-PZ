import userModel from "../models/user.model.js";
import mongoose from "mongoose";

let id = 1000;

export const createUser = (req, res) => {
  const user = userModel(req.body);
  user._idUser = new mongoose.Types.ObjectId(id);
  user
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json({ messege: err }));
  id++;
};

export const getUsers = (req, res) => {
  userModel
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.json({ messege: err }));
};

export const getUser = (req, res) => {
  const { id } = req.params;
  userModel
    .findById(id)
    .then((data) => res.json(data))
    .catch((err) => res.json({ messege: err }));
};

export const putUser = (req, res) => {
  const { id } = req.params;

  const { userName, name, email, infoUser, linkendProjects } = req.body;

  

  userModel
    .updateOne(
      { _id: id },
      { $set: { userName, name, email, infoUser, linkendProjects } }
    )
    .then((data) => res.json(data))
    .catch((error) => res.json({ messege: error }));
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  userModel
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((err) => res.json({ messege: err }));
};


