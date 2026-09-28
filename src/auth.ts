import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Google], // reads AUTH_GOOGLE_ID / AUTH_GOOGLE_SECRET from env automatically
  callbacks: {
    async signIn({ profile }) {
      // Explicit allow-list check. This is the entire authorization boundary
      // for /gabriellos — if ADMIN_EMAIL is ever unset, this must evaluate to
      // false (deny-all), never true (allow-all). Do not skip the comparison
      // when the env var is missing.
      return !!profile?.email && profile.email === process.env.ADMIN_EMAIL;
    },
  },
  pages: { signIn: "/gabriellos/login" },
});
