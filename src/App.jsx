/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */

import {useState} from "react";
import { tvShows } from "./shows/data";
import ShowDetails from "./shows/ShowDetails";
import ShowSelection from "./shows/ShowSelection";

function App() {

  const [shows] = useState(tvShows);
  const [selectedShow, setSelectedShow] = useState(); // not sure if these arrays are accurate 

  return (
    <>
      <header>
        <p>React TV</p>
      </header>
      <main>
      <ShowSelection
      shows={shows}
      selectedShow={selectedShow}
      setSelectedShow={setSelectedShow}
      />
      <ShowDetails show={selectedShow}/>
      </main>
    </>
  );
}

export default App;