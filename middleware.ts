import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Define the core public routes (pages a user can see while logged out)
const corePublicRoutes = createRouteMatcher([
  "/", // Homepage
  "/cart", // Cart page (if public)
  "/products", // Products listing (if public)
]);

// Define public API routes
const publicApiRoutes = createRouteMatcher([
  "/api/products", // example public API
]);

export default clerkMiddleware(async (auth, req: NextRequest) => {
  const { userId } = await auth();
  const url = new URL(req.url);
  const isApiRequest = url.pathname.startsWith("/api");

  // 🛑 FIX: Redirect logged-in users AWAY from sign-in/sign-up pages.
  // Allow them to access all other public routes (/, /cart, etc.).
  if (
    userId &&
    (url.pathname === "/sign-in" || url.pathname === "/sign-up")
  ) {
    // Redirect to the homepage if already logged in and trying to access auth pages
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Handle Unauthenticated access
  if (!userId) {
    const isCorePublic = corePublicRoutes(req);
    const isPublicApi = publicApiRoutes(req);

    // Unauthenticated user accessing a protected PAGE
    if (!isApiRequest && !isCorePublic && url.pathname !== "/sign-in" && url.pathname !== "/sign-up") {
      return NextResponse.redirect(new URL("/sign-in", req.url));
    }

    // Unauthenticated user accessing a protected API ROUTE
    if (isApiRequest && !isPublicApi) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  // Allow all other requests to proceed
  return NextResponse.next();
});

export const config = {
  // Match all routes except static files (.ico, .js, .css, etc.) and _next files
  matcher: ["/((?!.*\\..*|_next).*)", "/(api|trpc)(.*)"],
};