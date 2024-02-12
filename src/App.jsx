import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MovieCard from "./movieCard";
import MyGalleryComponent from "./MyGalleryComponent";

export default function App() {
  <div>
    <h2>the Movie DB</h2>
    <MovieCard
      movieName="Movie1"
      year="2000"
      director="someguy"
      imgLink="someimglink"
    ></MovieCard>
    <MyGalleryComponent />
  </div>;
}
