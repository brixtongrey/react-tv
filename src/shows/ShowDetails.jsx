import {useState} from "react";
import EpisodeList from "../episodes/EpisodeList"
import EpisodeDetails from "../episodes/EpisodeDetails"

import "./shows.css";

/** Allows users to browse through the episodes of the given show */
function ShowDetails({show}) {

  const [selectedEpisode, setSelectedEpisode] = useState(null);

  if (!show) {
    return (
      <>
      <section className="show-details">
        <h2>TV Show</h2>
      <p>Select a TV Show & Episode to learn more.</p>
      </section>
      </>
    );}
  
  
    return (
      <section className="show-details">
      <header>
      <div>
      <h2>{show.name}</h2>
      <p>{show.genre}</p>
      </div>
      </header>
      <div>
      <EpisodeList
      name={show.name}
      episodes={show.episodes}
      selectedEpisode={selectedEpisode}
      setSelectedEpisode={setSelectedEpisode}
      />
      <EpisodeDetails episode={selectedEpisode}/>
      </div>
      </section>
      );
  }



export default ShowDetails;