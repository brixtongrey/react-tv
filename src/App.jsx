/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */

import {useState} from "react";
import { tvShows } from "./shows/data";
import ShowDetails from "./shows/ShowDetails";

function App() {

  const [shows, setShows] = useState(tvShows);
  const [selectedShow, setSelectedShow] = useState(); // not sure if these arrays are accurate 

  return (
    <>
      <header>
        <p>React TV</p>
      </header>
      <main></main>
    </>
  );
}

export default App;