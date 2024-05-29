import mongoose, { Schema } from "mongoose";
import { MongoDbRoot } from "../utils/root_util.js";

let UserSchema: Schema = new Schema(
  {
    fullName: {
      type: String,
      default: ""
    },

    phoneNumber: {
      type: String,
      unique: true,
      default: ""
    },

    password: {
      type: String,
      default: ""
    },

    // roleClient: {
    //   type: Schema.Types.ObjectId,
    //   ref: MongoDbRoot.clientRoot
    // },

    createdAt: {
      type: String,
      default: ""
    },

    updatedAt: {
      type: String,
      default: ""
    },
  },
  {
    timestamps: false
  }
);

let UserModel = mongoose.model(MongoDbRoot.userRoot, UserSchema);

export { UserModel, UserSchema };

