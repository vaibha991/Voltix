"use client";

import { useEffect } from "react";
import { SignIn, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { addToCart } from "@/lib/cart";

export default function SignInPage() {
  const { isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      // Check for pending AddToCart
      const pending = localStorage.getItem("pendingAddToCart");
      if (pending) {
        const { product, quantity } = JSON.parse(pending);
        addToCart(product, quantity);
        localStorage.removeItem("pendingAddToCart");
      }

      // Redirect to original page or cart
      const urlParams = new URLSearchParams(window.location.search);
      const redirect = urlParams.get("redirect") || "/";
      router.push(redirect);
    }
  }, [isSignedIn, router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
    </div>
  );
}
