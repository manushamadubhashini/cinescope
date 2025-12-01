"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

export default function MoviesTable({movies}) {
  return (
    <div className="rounded-md border">
      <Table>
        {/* screen readers only */}
        <TableCaption className="sr-only">Admin Movies Table</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[80px]">#</TableHead>
            <TableHead>title</TableHead>
            <TableHead>year</TableHead>
            <TableHead>Genre</TableHead>
            <TableHead className="text-center">Rating</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {movies.map((movie , key) => (
            <TableRow key={movie.id}>
            <TableCell className="font-medium">{key + 1}</TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Image src={movie.poster ||"/placeholder.svg"} alt={movie.title} height={40} width={28} className="h-10 w-7 rounded object-fit-cover"/>
                <span className="max-w-60 text-wrap line-clamp-2 font-medium ">{movie.title}</span>
              </div>
              </TableCell>
            <TableCell>{movie.year}</TableCell>
            <TableCell className="">
              <div className="flex gap-1 flex-wrap">
                 {movie.genres.map((genre) => <Badge key={genre} variant="outline" className="text-xs">{genre}</Badge>)}
              </div>
              </TableCell>
            <TableCell>{Number(movie.imdb?.rating).toFixed(1)}</TableCell>
            <TableCell className="capitalize"><Badge className="bg-green-100 text-green-800">{movie.status} </Badge></TableCell>
            <TableCell className="text-right">
              <DropdownMenu className="">
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0 rounded-full">
                    <span className="sr-only">Open menu</span>
                   <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>

              </DropdownMenu>

            </TableCell>

          </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
