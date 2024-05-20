import React, { useEffect, useState } from "react";
import 'boxicons/css/boxicons.min.css';

const NewReleaseItem = ({ index, movieData, onClick }) => {
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
          <i className="bx bxs-star" style={{ color: "gold" }}></i> {/* Using provided star icon */}
          <p id={`r1${index + 1}`}>{parseFloat(movieData.vote_average).toFixed(1)}</p>
        </div>
      </div>
      <div id="title">
        <p id={`n1${index + 1}`}>{`${index + 1}. ${movieData.title}`}</p>
      </div>
      <div id="buttton">
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="40" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
          </svg>
          <p> Watchlist</p>
        </button>
      </div>
      <div id="trailer">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
          <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
        </svg>
        <p>Trailer</p>
      </div>
    </div>
  );
};

const NewRelease = () => {
  const [newReleases, setNewReleases] = useState([]);

  useEffect(() => {
    const fetchNewReleases = async () => {
      try {
        const res = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=92fa563a885cfe2c24ec14f2ac6254dd&language=en');
        const data = await res.json();
        setNewReleases(data.results);
      } catch (error) {
        console.error('Error fetching new releases:', error);
      }
    };

    fetchNewReleases();
  }, []);

  const handlePosterClick = (movieData) => {
    // Handle poster click, e.g., show big movie poster
    console.log('Clicked on movie:', movieData);
  };

  return (
    <div>
      <h1>Popular</h1>
      <div id="rel" style={{ height: "auto", display: "flex", overflowX: "auto" }}>
        {newReleases.map((movieData, index) => (
          <NewReleaseItem key={index} index={index} movieData={movieData} onClick={handlePosterClick} />
        ))}
      </div>
    </div>
  );
};

export default NewRelease;
