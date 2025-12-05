import AddMoviesFrom from "@/components/add-movies-from";
import MoviesData from "./movies-data";
import AddMoviesDialog from "@/components/add-movies-dialog";

export default function MoviePage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold tracking-tight">Movies</h2>
          <p className="text-muted-foreground">Manage your movies catalog</p>
        </div>
        <AddMoviesDialog />
      </div>
      <MoviesData />
    </div>
  );
}
