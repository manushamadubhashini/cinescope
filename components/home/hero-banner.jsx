import React from 'react'
import { Button } from '../ui/button'
import { Film , Play } from 'lucide-react' 
export default function HeroBanner({title = "Discover Amazing Movies",description = "Explore our collection of the best movies from around the word."}) {
  return (
      <section id='hero-section' className='relative overflow-hidden h-[calc(100vh-65px)]'>
        <div className='absolute inset-0 z-0'>
          {/* overlayer */}
            <div className='bg-linear-to-r absolute inset-0 z-10 from-black/70 via-black/50 to-black/70'></div> 
            <div className='absolute inset-0 bg-[url("/images/hero-1.jpg")] bg-cover bg-center opacity-60 dark:opacity-4'></div>
        </div>
          <div className='container relative z-20 px-4 py-32 md:py-40 lg:py-52'>
            <div className='flex flex-col justify-center items-center space-y-6 text-center'>
            <div className='max-w-3xl space-y-4'>
            <h1 className='text-white text-4xl md:text-6xl lg:text-7xl sm:text-5xl tracking-tighter drop-shadow-md  font-bold' >{title}</h1>
            <p className='mx-auto text-center max-w-[700px ] text-lg md:text-xl text-white/70 drop-shadow-sm'>{description}</p>
            </div>
            <div className='flex flex-col gap-3 sm:flex-row'>
              <Button size = "lg" className="bg-primary hover:bg-primary/80 size-lg">
              <Play className='size-4'/>
              Browse Movies
              </Button>
              <Button  size="lg" variant ="outline" className=" bg-primary/10 backdrop-blur-xs border-primary/30 text-white hover:bg-primary/20 hover:text-white ">
                Latest Releases
              </Button>
            </div>
            </div> 

          </div>
          
      </section>
  )
}
