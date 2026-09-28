"use client";

import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { Suspense } from "react";

function LoginContent() {
  const params = useSearchParams();
  const denied = params.get("error") === "AccessDenied";

  return (
    <div className="max-w-sm mx-auto mt-24 text-center space-y-6">
      <div>
        <h1 className="font-serif text-3xl font-semibold text-primary">Gabriellos Menu</h1>
        <p className="text-sm text-muted-foreground mt-2 italic">Sign in to manage prices, availability, and specials.</p>
      </div>

      {denied && (
        <p className="text-sm text-destructive border border-destructive/30 bg-destructive/10 rounded-lg px-4 py-3">
          Not authorized. This Google account isn&apos;t allowed to sign in here.
        </p>
      )}

      <button
        onClick={() => signIn("google", { callbackUrl: "/gabriellos" })}
        className="w-full rounded-full bg-primary text-primary-foreground font-semibold px-5 py-3 shadow-sm hover:brightness-110 active:scale-[0.99] transition"
      >
        Sign in with Google
      </button>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginContent />
    </Suspense>
  );
}
