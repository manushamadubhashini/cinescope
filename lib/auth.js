import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { db } from "@/db"; // your mongodb client

export const auth = betterAuth({
    database: mongodbAdapter(db),
      emailAndPassword: { 
    enabled: true, 
  }, 
  session:{
    expiresIn: "60 * 60 * 24 * 7",
    updateAge: "60 * 60 * 24",
    freshAge: 0 
  }
});