// import { NextRequest, NextResponse } from "next/server";

// export function middleware(req: NextRequest) {
//   const url = req.nextUrl.clone();

//   // CORS headers
//   const res = NextResponse.next();
//   res.headers.set("Access-Control-Allow-Origin", "*"); // Allow all origins; adjust if needed
//   res.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
//   res.headers.set(
//     "Access-Control-Allow-Headers",
//     "Content-Type, Authorization"
//   );

//   if (req.method === "OPTIONS") {
//     return res;
//   }

//   if (url.pathname.startsWith("/api/map")) {
//     url.pathname = url.pathname.replace("/api/map", ""); // Remove the /api/proxy prefix
//     url.hostname = "openapi.naver.com"; // Target API's hostname
//     url.protocol = "https";
//     const headers = new Headers(req.headers);
//     headers.set("X-Naver-Client-Id", process.env.NAVER_CLIENT_ID || "");
//     headers.set("X-Naver-Client-Secret", process.env.NAVER_CLIENT_SECRET || "");

//     // Forward the request to the external API
//     return fetch(url.toString(), {
//       method: req.method,
//       headers,
//       body: req.method === "POST" ? req.body : undefined,
//     }).then((apiRes) => {
//       // Forward the response from the API to the client
//       const response = new NextResponse(apiRes.body, {
//         status: apiRes.status,
//         headers: new Headers(apiRes.headers),
//       });
//       response.headers.set("Access-Control-Allow-Origin", "*"); // Allow all origins; adjust if needed
//       return response;
//     });
//   }

//   return res;
// }

// // Optional: Specify paths for the middleware to run on
// export const config = {
//   matcher: ["/api/map/:path*"], // Apply middleware to requests under /api/proxy
// };


// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
import { NextResponse } from "next/server";

export function middleware() {
  // retrieve the current response
  const res = NextResponse.next();

  // add the CORS headers to the response
  res.headers.append("Access-Control-Allow-Credentials", "true");
  res.headers.append("Access-Control-Allow-Origin", "*"); // replace this your actual origin
  res.headers.append(
    "Access-Control-Allow-Methods",
    "GET,DELETE,PATCH,POST,PUT"
  );
  res.headers.append(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  return res;
}

// specify the path regex to apply the middleware to
export const config = {
  // matcher: "/api/:path*",
  matcher: "/api/map",
};