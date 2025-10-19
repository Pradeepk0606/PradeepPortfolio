import mongoose, { Schema, Document } from "mongoose";

export interface ITestimonial extends Document {
  name: string;
  role: string;
  company: string;
  image: string;
  text: string;
  rating: number;
  approved: boolean;
  createdAt: Date;
}

const TestimonialSchema = new Schema<ITestimonial>(
  {
    name: { type: String, required: true },
    role: { type: String, required: true },
    company: { type: String, required: true },
    image: { type: String, required: true },
    text: { type: String, required: true },
    rating: { type: Number, min: 1, max: 5, default: 5 },
    approved: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.models.Testimonial || mongoose.model<ITestimonial>("Testimonial", TestimonialSchema);
