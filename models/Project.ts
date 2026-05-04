import { Model, Schema, Types, model, models } from "mongoose";

export interface ProjectDocument {
  _id: string;
  name: string;
  description: string;
  leaderId: Types.ObjectId | null;
  createdBy: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema = new Schema<ProjectDocument>(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    leaderId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: null
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Project =
  (models.Project as Model<ProjectDocument>) || model<ProjectDocument>("Project", ProjectSchema);

export default Project;
