import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db/mongoose";
import Newsletter from "@/lib/db/models/Newsletter";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    await connectDB();

    // Check if email already exists
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

    // Create new subscription
    await Newsletter.create({ email });

    return NextResponse.json(
      { message: "Successfully subscribed to newsletter!" },
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
