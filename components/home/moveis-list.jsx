import { GetMovies } from "@/action/movies";
import MoviesCard, { MoviesCardSkeleton } from "./movies-card";


export default async function MoviesList() {
  // const [movies,setMovies] = useState([])
  // useEffect(()=>{
  //   const loadMovies = async () =>{
  //        try{
  //         const data = await GetMovies()
  //         setMovies(data)

  //        }catch(error){
  //         console.log("Error fetching movies",error)
  //        }
  //   }
  //   loadMovies();


  // },[])
  await new Promise((res , rej) => setTimeout(() => res(1),3000)) // Simulate delay

  const movies = await GetMovies();
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

export function MoviesListSkeleton(){
  return(
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array(8).fill(0)
      .map((_, i) => (
        <MoviesCardSkeleton key={i}/>
      ))}
    </div>
  )
}
