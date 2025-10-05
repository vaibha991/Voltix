// app/api/checkout/route.ts
import { NextRequest, NextResponse } from "next/server";
import { CartItem } from "@/lib/types";

export async function POST(req: NextRequest) {
  // Parse the request body
  const { cart }: { cart: CartItem[] } = await req.json();

  // Log cart items (or handle payment/order processing here)
  console.log("✅ Order received:", cart);

  // Return success response with a fake order ID
  return NextResponse.json({ success: true, orderId: "ORDER12345" });
}
