 // option 1 : Get all movies from the API
import { db } from "@/db"
export const GetMovies = async() =>{
    try{
        const moviesResponse = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/movies`,
            {
                method: "GET",
                headers:{
                    "Content-Type" : "application/json",
                     Accept : "application/json"
                },
                cache: "no-store"
            }
        );
        if(!moviesResponse.ok){
            throw new Error("Network response was not ok:")
        }
        if(moviesResponse.status === 200){
           return await moviesResponse.json();
        }else{
            console.log("No movies found")
            return undefined;
        }
    }catch(error){
        console.log("Error fetching movies",error)
         return undefined;
    }

   
}
// option 2 : search movies from database  using  the server action
 export const searchMovies = async (query) => {
    try {
        // search by title (i = case insensitive)
        const movies =  await db
        .collection("movies")
        .find({title: {$regex: query, $options: "i"}})
        .limit(50)
        .toArray()
    
    console.log("Searched Movies:", movies.length , query);
    if(movies && movies.length > 0){
        return {
            success : true,
            message : "Movies found",
            data : movies
        };
        
    }else {
        return {
            success : false,
            message : "No movies found",
            data : []
        };
    }

    }catch (error) { 
        console.error("mongodb fetch failed ", error);
          return {
            success : false,
            message : "Error fetching movies",
            data : []
        };
    }
 }
