# Kakao Authentication Integration

This document explains how the Kakao Authentication is integrated with the Strapi v5 backend.

## Frontend Implementation

The frontend implementation consists of three main parts:

1. **Kakao Login Button**: A React component that redirects users to the Kakao authentication page.
2. **Redirect Page**: A route handler that processes the callback from Kakao and sets the JWT token.
3. **Auth Service**: A service that handles the communication with the Strapi backend.

## Strapi Backend Setup

To set up Kakao authentication in Strapi v5:

1. Install the `@strapi/plugin-users-permissions` if not already installed.
2. Configure Kakao provider in the Strapi admin panel:
   - Go to Settings > Users & Permissions Plugin > Providers
   - Enable and configure Kakao provider with:
     - Client ID (from Kakao Developer Console)
     - Client Secret (from Kakao Developer Console)
     - Callback URL: `http://localhost:3000/connect/kakao/redirect` (or your production URL)

3. Make sure the following API endpoints are available in your Strapi setup:
   - `GET /connect/kakao` - Initiates Kakao authentication
   - `GET /api/auth/kakao/callback` - Processes the callback from Kakao

## Environment Variables

Add the following environment variables to your Next.js `.env` file:

```
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
```

For production, update with your actual Strapi URL.

## Flow of Authentication

1. User clicks on the "Continue with Kakao" button
2. User is redirected to Kakao login page
3. After successful authentication, Kakao redirects back to the callback URL
4. The callback handler receives the authorization code
5. The backend verifies the code with Kakao and retrieves user information
6. Strapi creates or updates the user and generates a JWT token
7. The JWT token is set in cookies
8. User is redirected to the dashboard

## Testing

To test the Kakao authentication:

1. Make sure your Strapi server is running (`http://localhost:1337`)
2. Make sure your Next.js app is running (`http://localhost:3000`)
3. Click on the "Continue with Kakao" button
4. Complete the authentication process on Kakao
5. You should be redirected to the dashboard with a valid JWT token 