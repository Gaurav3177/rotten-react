import React, { useEffect, useState } from "react";

// Import or define the required URLs and other constants
const apiKey = "92fa563a885cfe2c24ec14f2ac6254dd";
const baseUrl = "https://api.themoviedb.org/3";
const languageCode = "en";
const baseImageUrl = "https://image.tmdb.org/t/p/w500";
const url1 = `${baseUrl}/discover/movie?api_key=${apiKey}&with_original_language=hi`;

const RecommendationItem = ({ index, movieData }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      id="poster"
      style={{
        margin: "1em",
        transform: isHovered ? "translateY(-3px) scale(1.1)" : "none",
        transition: "transform 0.2s ease-in-out" // Same transition duration as NewReleaseItem
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={{ margin: "1rem" }}>
        <img
          src={`${baseImageUrl}${movieData.poster_path}`}
          alt={`Image ${index + 1}`}
          id={`img${index + 11}`}
          className="z1"
        />
      </div>
      <div id="first">
        <div>
          <i className="bx bxs-star" style={{ color: "gold" }}></i>
          <p id={`r${index + 1}`}>{parseFloat(movieData.vote_average).toFixed(1)}</p>
        </div>
      </div>
      <div id="title">
        <p id={`n${index + 1}`}>{`${index + 1}. ${movieData.title}`}</p>
      </div>
      <div id="buttton">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="40"
            fill="currentColor"
            className="bi bi-plus"
            viewBox="0 0 16 16"
          >
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
          </svg>
          <p> Watchlist</p>
        </button>
      </div>
      <div id="trailer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-play-fill"
          viewBox="0 0 16 16"
        >
          <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
        </svg>
        <p>Trailer</p>
      </div>
    </div>
  );
};

function Recommendations() {
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  useEffect(() => {
    const fetchRecommendedMovies = async () => {
      try {
        const res = await fetch(url1);
        const data = await res.json();
        setRecommendedMovies(data.results);
      } catch (error) {
        console.error("Error fetching recommended movies:", error);
      }
    };

    fetchRecommendedMovies();
  }, []);

  return (
    <>
      <h1>Recommendations For You</h1>
      <div id="recomm" style={{ height: "fit-content", margin: "0" }}>
        {recommendedMovies.map((movieData, index) => (
          <RecommendationItem key={index} index={index} movieData={movieData} />
        ))}
      </div>
    </>
  );
}

export default Recommendations;
