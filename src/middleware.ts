import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  // CORS headers
  const res = NextResponse.next();
  res.headers.set("Access-Control-Allow-Origin", "*"); // Allow all origins; adjust if needed
  res.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );

  // Handle OPTIONS method (preflight requests)
  if (req.method === "OPTIONS") {
    return res;
  }

  // Redirect or proxy the request if needed
  // For example, proxy requests to an external API
  if (url.pathname.startsWith("/api/map")) {
    url.pathname = url.pathname.replace("/api/map", ""); // Remove the /api/proxy prefix
    url.hostname = "openapi.naver.com"; // Target API's hostname
    url.protocol = "https";
    const headers = new Headers(req.headers);
    headers.set("X-Naver-Client-Id", process.env.NAVER_CLIENT_ID || "");
    headers.set("X-Naver-Client-Secret", process.env.NAVER_CLIENT_SECRET || "");

    // Forward the request to the external API
    return fetch(url.toString(), {
      method: req.method,
      headers,
      body: req.method === "POST" ? req.body : undefined,
    }).then((apiRes) => {
      // Forward the response from the API to the client
      const response = new NextResponse(apiRes.body, {
        status: apiRes.status,
        headers: new Headers(apiRes.headers),
      });
      response.headers.set("Access-Control-Allow-Origin", "*"); // Allow all origins; adjust if needed
      return response;
    });
  }

  return res;
}

// Optional: Specify paths for the middleware to run on
export const config = {
  matcher: ["/api/map/:path*"], // Apply middleware to requests under /api/proxy
};
