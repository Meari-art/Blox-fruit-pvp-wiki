import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";

export async function POST() {
  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    line_items: [{ price: process.env.STRIPE_SUPPORTER_PRICE_ID, quantity: 1 }],
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/supporter/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/supporter/cancel`
  });

  return NextResponse.json({ url: session.url });
}
