import React, { useEffect, useState } from "react";
import 'boxicons/css/boxicons.min.css';

const NewReleaseItem = ({ index, movieData, onClick, onTrailerClick, onWatchlistClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div id="poster" style={{ margin: "1em", transform: isHovered ? "translateY(-3px) scale(1.1)" : "none", transition: "transform 0.2s ease-in-out" }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={() => onClick(movieData)}>
      <div style={{ margin: "1rem" }}>
        <img src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} alt={`Image ${index + 1}`} id={`img1${index + 21}`} className="z1" />
      </div>
      <div id="first">
        <div>
          <i className="bx bxs-star" style={{ color: "gold" }}></i>
          <p id={`r1${index + 1}`}>{parseFloat(movieData.vote_average).toFixed(1)}</p>
        </div>
      </div>
      <div id="title" style={{ height: "3rem", overflow: "hidden" }}>
        <p id={`n1${index + 1}`} style={{ margin: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{`${index + 1}. ${movieData.title}`}</p>
      </div>
      <div id="button">
        <button className="action-button watchlist" onClick={(e) => { e.stopPropagation(); onWatchlistClick(movieData); }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="40" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
          </svg>
          <span>Watchlist</span>
        </button>
        <button className="action-button trailer" onClick={(e) => { e.stopPropagation(); onTrailerClick(movieData); }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
          </svg>
          <span>Trailer</span>
        </button>
      </div>
    </div>
  );
};


function NewRelease() {
  const [newReleaseData, setNewReleaseData] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchNewReleaseData = async () => {
      try {
        const apiKey = "92fa563a885cfe2c24ec14f2ac6254dd";
        const baseUrl = "https://api.themoviedb.org/3";
        const url = `${baseUrl}/movie/now_playing?api_key=${apiKey}&language=en`;

        const response = await fetch(url);
        const data = await response.json();

        // Store only the first movie separately for the big poster
        setSelectedMovie(data.results[0]);
        // Store the rest of the movies for the smaller posters
        setNewReleaseData(data.results.slice(1)); // Remove the first movie
      } catch (error) {
        console.error("Error fetching new release data:", error);
      }
    };

    fetchNewReleaseData();
  }, []);

  const handlePosterClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleTrailerClick = (movie) => {
    // Handle trailer click
    console.log('Trailer clicked:', movie);
  };

  const handleWatchlistClick = (movie) => {
    // Handle watchlist click
    console.log('Added to watchlist:', movie);
  };

  return (
    <div style={{ overflowX: "hidden", display: "flex", flexDirection: "column", alignItems: "center" }}>
      {/* Big poster and its info */}
      {selectedMovie && (
        // Big poster and its info
// Big poster and its info
<div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "3rem auto" }}>
  {/* Big landscape poster */}
  <img src={`https://image.tmdb.org/t/p/original${selectedMovie.backdrop_path}`} alt={`Backdrop of ${selectedMovie.title}`} style={{ width: "50%", height: "auto" }} />
  {/* Movie information */}
  <div style={{ color: "white", marginLeft: "2rem" }}>
    <h1 style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: "2rem", margin: "0" }}>{selectedMovie.title}</h1>
    <p className="a4" style={{ wordWrap: "break-word", fontSize: "1.2rem", margin: "0", marginTop: "1rem" }}>{selectedMovie.overview}</p>
    <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
      <button className="action-button watchlist" onClick={() => handleWatchlistClick(selectedMovie)}>Add to Watchlist</button>
      <button className="action-button " style={{backgroundColor:""}} onClick={() => handleTrailerClick(selectedMovie)}>Watch Trailer</button>
    </div>
    <div style={{ display: "flex", gap: "0.5rem", marginTop: "1rem" }}>
      <img src="1.png" alt="" style={{ width: "40px", height: "auto", margin: "0", verticalAlign: "middle" }} />
      <p className="a4" style={{ margin: "0", alignSelf: "center" }}>{parseFloat(selectedMovie.vote_average).toFixed(1)}</p>
    </div>
    <p className="a4">Release Date: {selectedMovie.release_date}</p>
  </div>
</div>


      )}

      {/* Small posters below */}
      <div id="rel"  style={{ height:"auto" }}>
        {newReleaseData.map((movie, index) => (
          <NewReleaseItem key={index} index={index} movieData={movie} onClick={handlePosterClick} onTrailerClick={handleTrailerClick} onWatchlistClick={handleWatchlistClick} />
        ))}
      </div>
    </div>
  );
}

export default NewRelease;

