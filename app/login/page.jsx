import React from "react";
import LoginForm from "@/components/login-form";
import Link from 'next/link'
import { Logo } from "@/components/logo";

export default function LoginPage() {
  return (
    <div className="flex flex-col container min-h-screen">
      <Link href="/" className="flex items-center gap-1 h-16">
        <Logo className="h-8 w-8" fill="fill-primary" />
        <div className="font-bold text-xl text-primary">CineScope</div>
      </Link>
      <div className="flex min-h-[calc(100vh-64px)] w-full items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
