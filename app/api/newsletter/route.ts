import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db/mongoose";
import Newsletter from "@/lib/db/models/Newsletter";
import nodemailer from "nodemailer";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    if (process.env.MONGODB_URI) {
      await connectDB();
    }

    // Check if email already exists (only when DB configured)
    if (process.env.MONGODB_URI) {
      const existing = await Newsletter.findOne({ email });
      if (existing) {
        if (existing.subscribed) {
          return NextResponse.json(
            { error: "Email already subscribed" },
            { status: 400 }
          );
        } else {
          // Resubscribe
          existing.subscribed = true;
          await existing.save();
          return NextResponse.json(
            { message: "Successfully resubscribed!" },
            { status: 200 }
          );
        }
      }
    }

    // Create new subscription
    if (process.env.MONGODB_URI) {
      await Newsletter.create({ email });
    }

    let emailSent = false;

    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 465,
          secure: true,
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        // Notify admin/owner
        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
          subject: "New Newsletter Subscription",
          html: `<p>New subscriber: <strong>${email}</strong></p>`,
        });

        // Confirmation to subscriber
        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: email,
          subject: "Thanks for subscribing!",
          html: `<p>Hi,</p><p>Thanks for subscribing to my newsletter. You'll receive updates on new posts and projects.</p><p>– Pradeepkumar R</p>`,
        });
        emailSent = true;
      } catch (e) {
        console.error("Newsletter email send error:", e);
      }
    }

    if (!emailSent) {
      const EJ_SERVICE = process.env.EMAILJS_SERVICE_ID;
      const EJ_TEMPLATE_NEWS = process.env.EMAILJS_TEMPLATE_ID_NEWSLETTER;
      const EJ_USER = process.env.EMAILJS_PUBLIC_KEY;

      if (EJ_SERVICE && EJ_TEMPLATE_NEWS && EJ_USER) {
        try {
          const ejRes = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              service_id: EJ_SERVICE,
              template_id: EJ_TEMPLATE_NEWS,
              user_id: EJ_USER,
              template_params: {
                to_email: email,
              },
            }),
          });
          if (ejRes.ok) emailSent = true;
        } catch (e) {
          console.error("Newsletter EmailJS error:", e);
        }
      }
    }

    return NextResponse.json(
      {
        message: emailSent
          ? "Successfully subscribed to newsletter! Confirmation email sent."
          : "Successfully subscribed to newsletter! Email not sent (email service not configured).",
        emailSent,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { error: "Failed to subscribe" },
      { status: 500 }
    );
  }
}

