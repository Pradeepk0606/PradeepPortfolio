import mongoose, { Schema, Document } from "mongoose";

export interface IProject extends Document {
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  category: string[];
  image: string;
  github?: string;
  demo?: string;
  featured: boolean;
  impact?: string;
  metrics?: {
    [key: string]: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema = new Schema<IProject>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    longDescription: { type: String, required: true },
    tech: [{ type: String }],
    category: [{ type: String }],
    image: { type: String, required: true },
    github: { type: String },
    demo: { type: String },
    featured: { type: Boolean, default: false },
    impact: { type: String },
    metrics: { type: Map, of: String },
  },
  { timestamps: true }
);

export default mongoose.models.Project || mongoose.model<IProject>("Project", ProjectSchema);
