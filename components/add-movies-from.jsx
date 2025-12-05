"use client";
import React from "react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  capitalizeFirstLetter,
  getAllGenres,
  getAllMovieStatus,
  getAllYears,
} from "@/lib/utils";
export default function AddMoviesFrom() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const year = getAllYears();
  const genre = getAllGenres();
  const status = getAllMovieStatus();
  console.log(new Date().getFullYear());
  return (
    <form className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="title">
            Title
            <span className="text-red-500">*</span>
          </Label>
          <Input
            id="title"
            type="text"
            placeholder="Enter movie title"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="year">
            Year
            <span className="text-red-500">*</span>
          </Label>
          <Select id="year" name="year" required>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Please select year" />
            </SelectTrigger>
            <SelectContent>
              {year.map((year, index) => (
                <SelectItem key={`${year}-${index}`} value={year}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="director">Director</Label>
          <Input
            id="director"
            type="text"
            placeholder="Director name"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="genre">
            Genre
            <span className="text-red-500">*</span>
          </Label>
          <Select id="genre" name="genre" required>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Please select genre" />
            </SelectTrigger>
            <SelectContent>
              {genre.map((genre, index) => (
                <SelectItem key={`${genre}-${index}`} value={genre}>
                  {genre}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="rating">
            IMDb Rating
            <span className="text-red-500">*</span>
          </Label>
          <Input
            id="rating"
            placeholder="IMDb rating(0.0 - 10.0)"
            type="number"
            max="10"
            min="0"
            step="0.1"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="runtime">
            Runtime
            <span className="text-red-500">*</span>
          </Label>
          <Input
            id="runtime"
            placeholder="Runtime in minutes"
            type="number"
            max="1000"
            min="0"
            step="1"
            required
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="overview">
          Overview
          <span className="text-red-500">*</span>
        </Label>
        <Textarea
          id="overview"
          type="text"
          placeholder="Movie description"
          className="h-[6.25rem]"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="poster">
            Poster URL
            <span className="text-red-500">*</span>
          </Label>
          <Input
            id="poster"
            name="poster"
            type="text"
            placeholder="URL to poster image"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="backdrop">
            Backdrop URL
            <span className="text-red-500">*</span>
          </Label>
          <Input
            id="backdrop"
            name="backdrop"
            type="text"
            placeholder="URL to backdrop image"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="status">
            Status
            <span className="text-red-500">*</span>
          </Label>
          <Select id="status" name="status" required>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Please select status" />
            </SelectTrigger>
            <SelectContent>
              {status.map((status, index) => (
                <SelectItem
                  key={`${status}-${index}`}
                  value={status}
                  className="capitalize"
                >
                  {capitalizeFirstLetter(status)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      {/* 102px */}
      <DialogFooter>
        <Button type="reset" variant = "outline" className="min-w-[6.375rem]" disabled={isSubmitting} onClick={() =>{}}>Cancel</Button>
         <Button type="submit" className="min-w-[6.375rem]" disabled={isSubmitting}>{isSubmitting ? "Adding..." : "Add Movie"}</Button>
      </DialogFooter>
    </form>
  );
}
