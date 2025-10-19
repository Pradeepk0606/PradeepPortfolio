import mongoose, { Schema, Document } from "mongoose";

export interface INewsletter extends Document {
  email: string;
  subscribed: boolean;
  createdAt: Date;
}

const NewsletterSchema = new Schema<INewsletter>(
  {
    email: { type: String, required: true, unique: true },
    subscribed: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.Newsletter || mongoose.model<INewsletter>("Newsletter", NewsletterSchema);
