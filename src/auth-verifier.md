# Authentication Verification Utility

```typescript
import { cookies } from "next/headers";
import { verifyJwtToken } from "./verify-jwt-token";

// Create an async function called verifyAuth
export default async function verifyAuth() {
  // Get the auth cookie
  const cookieStore = cookies();
  const auth = cookieStore.get("auth");

  // If no auth cookie is found, return false
  if (!auth) {
    //console.log("Auth cookie not found");
    return false;
  }

  // If an auth cookie is found, verify it
  const verifiedToken = await verifyJwtToken(auth.value);

  // If the token is verified, return true
  if (verifiedToken) {
    //console.log("Auth cookie verified");
    return true;
  } else {
    // If the token is not verified, return false
    //console.log("Auth cookie not verified");
    return false;
  }
}
```

## JWT Token Verification

```typescript
import { jwtVerify } from "jose";

// Get JWT secret key from environment variable
export function getJwtSecretKey() {
  const secret = process.env.NEXT_PUBLIC_JWT_SECRET_KEY;

  // Throw an error if the secret key is not set
  if (!secret) {
    throw new Error("JWT Secret key is not matched");
  }

  // Encode the secret key to `Uint8Array`
  return new TextEncoder().encode(secret);
}

// Verify JWT token
export async function verifyJwtToken(token: string | Uint8Array) {
  try {
    const { payload } = await jwtVerify(token, getJwtSecretKey());

    return payload;
  } catch (error) {
    return null;
  }
}
```
