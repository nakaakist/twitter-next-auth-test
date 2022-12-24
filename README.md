# Twitter NextAuth test

This repo is a demo for the following:

- SSO with twitter in Next.js app
- Get twitter user ID in both client & server side after the user logged in.

## Notes on the implementation

- By default, NextAuth does not store the twitter user ID. Therefore, it was needed to:
  - add custom callbacks in the `authOption` in `pages/api/auth/[...nextauth].js`.
  - extend the `User` type to include the twitter user ID. (`types/next-auth.d.ts`)
- The `callback URL` configured in the Twitter API developer portal and the actual callback URL in the app must match.

## Setup

1. Sign up for [twitter API](https://developer.twitter.com/en/docs/twitter-api/getting-started/about-twitter-api).

2. Go to the [developer portal](https://developer.twitter.com/en/portal/projects-and-apps) of Twitter API. Create an app, and setup the "User authentication settings" to get Client ID and secret. Set the callback URL to `http://localhost:3000/api/auth/callback/twitter`.

3. Clone this repo, and create a `.env.local` file in the root directory. Add the following:

```
TWITTER_CLIENT_ID=<YOUR CLIENT ID>
TWITTER_CLIENT_SECRET=<YOUR CLIENT SECRET>
NEXTAUTH_SECRET=<YOUR SECRET>
```

4. Run `pnpm install` and `pnpm dev`.

5. You can access the app at http://localhost:3000
