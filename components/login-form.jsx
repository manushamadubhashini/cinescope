"use client";
import React, { useState } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EMAIL_REGEX } from "@/lib/constants";
import { signIn } from "@/lib/auth-client";

const DEFAULT_ERROR = {
  error: false,
  message: "",
};

export default function LoginForm() {
  const [error, setError] = useState(DEFAULT_ERROR);
  const [isLoading,setIsLoading] = useState(false)

  const validateForm = ({ email, password }) => {
    console.log("Email", email);
    console.log("Password", password);
    if (email === "") {
      setError({
        error: true,
        message: "Email is required.",
      });
      return false;
    } else if (password === "") {
      setError({
        error: true,
        message: "Password is required.",
      });
      return false;
    } else if(!EMAIL_REGEX.test(email)){
      setError({
        error: true,
        message: "Email is not valid."
      })
      return false;
    }
    setError(DEFAULT_ERROR);
    return true;
  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const email = formData.get("email");
    const password = formData.get("password");
    // basic validation
    if (validateForm({ email, password })) {
      console.log("validation passed!");
      setIsLoading(true)
      try{
        await signIn.email(
          {email,password},
          {
            onSuccess :(ctx) => {
              console.log("Login Successfully",ctx)
            },
            onError: (ctx) =>{
              setError({
                error:true,
                message:ctx.error.message || "Login Failed. Please try again"// context.error.message
              })
             
            }
          }
        ); 
      
       
      }catch (error){
        setError({
          error : true,
          message : "An unexpected error during login. Please try again."
        })

      }finally{
      
       setIsLoading(false)
      }
    
    } else {
      console.log("validation failed!");
    }
  };

  return (
    <div className="flex flex-col gap-6 bg-background">
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmitForm} noValidate>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
                />
              </div>
              <div className="flex justify-center">
                {error.error && (
                  <span className="text-sm text-red-500 font-medium animate-pulse duration-500">
                    {error.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full" disabled = {isLoading}>
                  {isLoading && <Loader2 className="animate-spin"/>}
                  Login
                </Button>
                <Button variant="outline" className="w-full">
                  Login with Google
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/signUp" className="underline underline-offset-4">
                Sign up
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
