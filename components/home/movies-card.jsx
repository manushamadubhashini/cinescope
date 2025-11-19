"use client"
import Image from 'next/image'
import { Card ,CardContent, CardFooter } from '../ui/card'
import React, { useState } from 'react'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Skeleton } from '../ui/skeleton'

export default function MoviesCard({movie}) {
  const [posterUrl,setPosterUrl] = useState(movie.poster)

  return (
      <Card className="border-primary/20 hover:border-primary/50 py-0 transition-colors overflow-hidden gap-0">
        <div className='aspect-2/3 w-full overflow-hidden'>
          <Image width={300} height={450} src={posterUrl || "/placeholder.svg" } alt={movie.title} className='w-full h-full object-fit-cover hover:scale-105 transform duration-300' priority onError={() => setPosterUrl("/placeholder.svg") }/>
        </div>
        <CardContent className="p-4">
          <h3 className='line-clamp-1 font-semibold'>{movie.title}</h3>
          <p className='text-muted-foreground text-sm'> {movie.year} • {movie.runtime} min</p>     
          <div className='flex flex-wrap mt-2 gap-1'>{movie?.genres?.slice(0,2).map((genre,index) =>(
             <Badge key={`${genre}-${index}`} variant="outline" className=' border-primary/30 bg-primary/5 text-x5'>{genre}</Badge>
          ))} 
          {movie?.genres?.length > 2 && (<Badge>+{movie?.genres?.length-2}</Badge>)}
          </div>  
          </CardContent>
          <CardFooter className='flex justify-between p-4 pt-0'>
            <div className='flex items-center'>
              <span className='text-primary text-sm font-medium '>{movie?.imdb?.rating}/10</span>
            </div>
            <Button variant="ghost" className='hover:text-primary'>Details</Button>
          </CardFooter>
        </Card>
  )
}
// This is a dummy component for skeleton loading state
export function  MoviesCardSkeleton () {
  return (
    <div className = "overflow-hidden rounded-lg">
      <Skeleton className="aspect-2/3 w-full"/>
      <div className='p-4'>
      <div className="space-y-2" >
        <Skeleton className="h-4 w-3/4"/>
         <Skeleton className="h-4 w-1/2"/>
      </div>
       <div className="flex mt-3 gap-1">
        <Skeleton className="h-5 w-1/5"/>
         <Skeleton className="h-5 w-1/5"/>
      </div>
      <div className='flex justify-between gap-2 py-7'>
        <Skeleton className="h-6 w-16 rounded-full"/>
        <Skeleton className="h-6 w-16 rounded-full"/>    
      </div>
      </div>
    </div>
  )
}
