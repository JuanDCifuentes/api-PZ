import { Schema, model } from "mongoose";

const preProjectSchema = Schema({
  _idProject: {
    type: Schema.Types.ObjectId,
    unique: true,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  items: [
    {
      id: Number,
      nameItem: String,
      body: String,
    },
  ],
  infoProject: {
    authors: [
      {
        studentName: String,
        idUser: String,
      },
    ],
    teachersCharge: [
      {
        teacherName: String,
        idUser: String,
      },
    ],
    comments: [
      {
        idComment: Number,
        userName: String,
        bodyComment: String,
      },
    ],
    state: {
      type: String,
      default: "borrador",
    },
    review: [
      {
        reviewed: {
          type: Boolean,
          default: false,
        },
        idUser: String,
      },
    ],
  },
});

export default model("preProject", preProjectSchema);
