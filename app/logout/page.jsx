'use client'

import React from 'react'
import { signOut } from '@/lib/auth-client'
import { Button } from '@/components/ui/button'
import {useRouter} from 'next/navigation'

export default function LogOut() {
  const router = useRouter();
const handleSignOut= async () =>{
    await signOut(
          router.push("/")
      );
}
  return (
   <div className="flex justify-center p-10">
    <Button onClick = {()=> handleSignOut()} >Sign Out</Button>
   </div>
  )
}