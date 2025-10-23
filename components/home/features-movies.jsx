
import { Section } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import MoviesList from './moveis-list'

export default function FeaturedMovies() {
  return (
   <section id="featured-movies" className='container px-4 py-12 md:px-6'>
    <div className='flex items-center justify-between mb-8'>
        <div>
            <h2 className='text-3xl tracking-tighter font-bold'>Featured Movies</h2>
            <p className='text-muted-foreground text-sm'>Explore the latest and greatest movies that are marking waves in the cinema world.</p>
        </div>
        <Button variant="outline">View  All</Button>
      </div>
      <div className='bg-purple-400 w-full h-20 rounded-lg mb-5'></div>
      <MoviesList/> 
   </section>
  )
}
 