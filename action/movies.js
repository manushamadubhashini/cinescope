

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