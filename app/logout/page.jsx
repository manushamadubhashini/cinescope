'use client'

import React from 'react'
import { signOut } from '@/lib/auth-client'
import { Button } from '@/components/ui/button'

export default function LogOut() {
const handleSignOut= async () =>{
    await signOut();
}
  return (
   <div className="flex justify-center p-10">
    <Button onClick = {()=> handleSignOut()} >Sign Out</Button>
   </div>
  )
}