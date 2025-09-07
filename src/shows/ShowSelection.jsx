import "./shows.css";

/** A navbar that allows users to choose between a list of shows */
function ShowSelection({show, selectedShow, setSelectedShow }) {
  
  const handleClick = (item) => {
    setSelectedShows(item);
  };

  return (
  <nav className="shows">
  {shows.map((show) => {
    const isSelected = show.name === selectedShow?.name;
    return (
      <button onClick={() => handleClick(show)}
      key={show.name}
      type="button"
      >
      {show.name}
      </button>
    );
  })}
  </nav>
  );
}


export default ShowSelection;