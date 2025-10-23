"use client";
import { GetMovies } from "@/action/movies";
import React, { useEffect, useState } from "react";
import MoviesCard from "./movies-card";

export default function MoviesList() {
  const [movies,setMovies] = useState([])
  useEffect(()=>{
    const loadMovies = async () =>{
         try{
          const data = await GetMovies()
          setMovies(data)

         }catch(error){
          console.log("Error fetching movies",error)
         }
    }
    loadMovies();


  },[])
  if(!movies || movies.length === 0){
    return(
    <div className="text-center py-12 text-muted-foreground font-bold">No movies found!</div>
    )
  }
  
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {movies.map((movie,index) =>(
         <div key={`${movie._id}`}><MoviesCard movie={movie}/></div>
      ))}
      
    </div>
  );
}
