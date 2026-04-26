import { NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  company?: string;
  email?: string;
  teamSize?: string;
  goal?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as LeadPayload;

  if (!body.name || !body.email || !body.company) {
    return NextResponse.json(
      { success: false, message: "Name, email, and company are required." },
      { status: 400 }
    );
  }

  return NextResponse.json({
    success: true,
    message: "Lead captured successfully.",
    lead: {
      ...body,
      receivedAt: new Date().toISOString()
    }
  });
}
