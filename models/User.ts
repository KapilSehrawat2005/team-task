import { Model, Schema, Types, model, models } from "mongoose";

import type { Role } from "@/types";

export interface UserDocument {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: Role;
  projectId: Types.ObjectId | null;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<UserDocument>(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ["admin", "leader", "member", "pending"],
      default: "pending"
    },
    projectId: {
      type: Schema.Types.ObjectId,
      ref: "Project",
      default: null
    }
  },
  {
    timestamps: true
  }
);

const User = (models.User as Model<UserDocument>) || model<UserDocument>("User", UserSchema);

export default User;
