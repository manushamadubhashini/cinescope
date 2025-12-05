import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import AddMoviesFrom from "./add-movies-from";

export default function AddMoviesDialog() {
  return (
      <Dialog>
        <DialogTrigger asChild>
           <Button><PlusIcon className="h-4 w-4 mr-2"/>Add Movie</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Movie</DialogTitle>
            <DialogDescription>
             Fill in the details below to add a new movie to your catalog.
            </DialogDescription>
          </DialogHeader>
          <AddMoviesFrom/>
        </DialogContent>
      </Dialog>
  );
}
