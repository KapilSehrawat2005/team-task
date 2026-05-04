import { Model, Schema, Types, model, models } from "mongoose";

import type { TaskPriority, TaskStatus } from "@/types";

export interface TaskDocument {
  _id: string;
  title: string;
  description: string;
  status: TaskStatus;
  projectId: Types.ObjectId;
  assignedTo: Types.ObjectId;
  createdBy: Types.ObjectId;
  deadline: Date | null;
  priority: TaskPriority;
  createdAt: Date;
  updatedAt: Date;
}

const TaskSchema = new Schema<TaskDocument>(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    status: {
      type: String,
      enum: ["pending", "in-progress", "completed"],
      default: "pending"
    },
    projectId: {
      type: Schema.Types.ObjectId,
      ref: "Project",
      required: true
    },
    assignedTo: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    deadline: {
      type: Date,
      default: null
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium"
    }
  },
  {
    timestamps: true
  }
);

const Task = (models.Task as Model<TaskDocument>) || model<TaskDocument>("Task", TaskSchema);

export default Task;
