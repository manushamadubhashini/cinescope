import { Sun } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'

export default function ModeToggle() {
  return (
  <Button variant="ghost" size="icon" className="h-9 w-9">
    <span className = 'sr-only'>Toggle Light/Dark Mode</span>
    <Sun className='h-[1.2rem] w-[1.2rem]'/>
  </Button>
  )
}
