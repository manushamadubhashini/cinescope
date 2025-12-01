import { searchMovies } from '@/action/movies'
import React from 'react'
import MoviesTable from './movies-table';

export default async function MoviesData({query = ""}) {
    try {
        const {data: moviesData = []} = await searchMovies(query);
        if(!moviesData.length) throw new Error("No movies found in database");

        const refineMovies = moviesData.map((movie) => ({
            id : movie._id.toString(),
            title : movie.title,
            year : movie.year,
            plot: movie.plot,
            rating : movie.rated,
            genres : movie.genres,
            poster : movie.poster,
            imdb : movie.imdb,
            runtime : movie.runtime,
            status : movie.status ?? "published",
            directors : movie.directors,

        }))

        console.log(refineMovies);
    
        return <MoviesTable movies={refineMovies}/>
    }catch {
        return (
            <div>No Movies Available!</div>
        )

    }
  
}

