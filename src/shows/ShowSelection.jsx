import "./shows.css";

/** A navbar that allows users to choose between a list of shows */
function ShowSelection({shows, selectedShow, setSelectedShow }) {
  
  const handleClick = (item) => {
    setSelectedShow(item);
  };

  return (
  <nav className="shows">
  {shows.map((show) => {
    const isSelected = show.name === selectedShow?.name;
    return (
      <button onClick={() => handleClick(show)}
      key={show.name}
      className={isSelected ? "is selected" : ""}
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