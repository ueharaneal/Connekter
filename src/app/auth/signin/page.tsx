import React, { Suspense } from "react";
import SignInForm from "@/components/auth/SignInForm";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  OAuthSignInButtonSkeleton,
  OAuthSignInButton,
} from "@/components/auth/OAuthSignInButtons";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";

export default function SignInPage() {
  return (
    <main className="mt-4 flex w-full flex-col items-center">
      <div className="container flex max-w-7xl flex-col items-center">
        <h1 className="text-3xl font-bold tracking-tight"> Sign In </h1>
        <div className="my-4 h-1 max-w-7xl bg-muted" />
        {/* SignUp form  */}
        <SignInForm />
        {/* Oauth Links */}
        <div className="my-4 h-1 w-full bg-muted" />
        {/* SignUp form  */}
        <Suspense fallback={<OAuthSignInButtonSkeleton signUp={false} />}>
          <OAuthSignInButton signUp={false} />
        </Suspense>
        {/* Go to signin link */}

        <div className="mt-5 text-center text-sm">
          Don&apos;t have an Account?
          <Button asChild variant="link" className="-mx-3">
            <Link href="/auth/signup">Click Here</Link>
          </Button>
          to sign up
        </div>
      </div>
    </main>
  );
}
