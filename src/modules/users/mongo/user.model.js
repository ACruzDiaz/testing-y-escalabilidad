import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
    },
    pets: {
      type: [ { _id: { type: mongoose.SchemaTypes.ObjectId, ref: "pets" } } ],
      default: []
    }
  });

export const userModel = mongoose.model('User', userSchema);
