import "next-auth";

// override session object to include user ID from Twitter
// https://github.com/nextauthjs/next-auth/issues/671

declare module "next-auth" {
  interface User {
    id?: string;
  }

  interface Session {
    user: User;
  }
}
