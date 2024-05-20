import React, { useEffect, useState } from "react";
import PosterList from "../Poster/Poster";
import Recommendations from "../Recommendation/Recom";
import TvShows from "../TvShow/Tv";
import Footer from "../Footer/Footer";
import NewRelease from "../New/New";

const apiKey = "92fa563a885cfe2c24ec14f2ac6254dd";
const baseUrl = "https://api.themoviedb.org/3";
const baseImageUrl = "https://image.tmdb.org/t/p/w500";
const url = `${baseUrl}/discover/movie?api_key=${apiKey}&with_original_language=en`;

function Home() {
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const res = await fetch(url);
            const data = await res.json();
            setMovies(data.results.slice(0, 4)); // Limit to 4 movies
        };

        fetchMovies();
    }, []);

    const handleSearch = async () => {
        if (!searchQuery.trim()) return;
        const res = await fetch(`${baseUrl}/search/movie?api_key=${apiKey}&query=${searchQuery}`);
        const data = await res.json();
        setSearchResults(data.results.slice(0, 4));
    };

    const handleClick = (movie) => {
        const params = new URLSearchParams({
            poster_path: movie.poster_path,
            title: movie.title,
            overview: movie.overview,
            release_date: movie.release_date,
            vote_average: movie.vote_average,
            "genre_ids[0]": movie.genre_ids[0],
            "genre_ids[1]": movie.genre_ids[1],
            original_language: movie.original_language
        });

        // Construct the URL with query parameters
        const final1Url = `${window.location.origin}/final1.html?${params.toString()}`;
n999mn
        
        // Open final1.html in a new tab
        window.open(final1Url, '_blank');
    };

    return (
        <>
            <div className="mast" id="fixed">
                <div className="hero">
                    <video autoPlay muted loop id="bgvid" src="./bgvideo.mp4" style={{ width: "100%", height: "100%", objectFit: "cover" }}></video>
                    <nav>
                        <div id="lists">
                            <ul>
                                <li id="logo">Rotten-Potatoes🥔</li>
                                <li className="gayab">Home</li>
                                <li className="gayab">Genre</li>
                                <li className="gayab">About</li>
                            </ul>
                        </div>
                        <div id="lists2">
                            <ul id="searchbar">
                                <li>
                                    <i className="bx bx-search-alt-2" style={{ fontSize: "1.78rem" }} onClick={handleSearch}></i>
                                </li>
                                <input
                                    type="search"
                                    className="search-input"
                                    placeholder="Search.."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    onKeyPress={(e) => {
                                        if (e.key === 'Enter') {
                                            handleSearch();
                                        }
                                    }}
                                />
                                <li id="hlo"></li>
                            </ul>
                        </div>
                    </nav>
                    <div id="baars">
                        <div id="sideimg">
                            {searchResults.length > 0 ? (
                                searchResults.map((movie, i) => (
                                    <div className="image-container" key={i}>
                                        <img
                                            id={`img${i + 1}`}
                                            src={baseImageUrl + movie.backdrop_path}
                                            alt={`Image ${i + 1}`}
                                            className="hi"
                                            onClick={() => handleClick(movie)}
                                        />
                                        <div className="tooltip">
                                            <h1>{movie.title}</h1>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <i className='bx bxs-star' style={{ color: 'gold' }}></i>
                                                <p style={{ margin: '0 0 0 5px' }}>{movie.vote_average}</p>
                                            </div>
                                            <p>Release Date: {movie.release_date}</p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                movies.map((movie, i) => (
                                    <div className="image-container" key={i}>
                                        <img
                                            id={`img${i + 1}`}
                                            src={baseImageUrl + movie.backdrop_path}
                                            alt={`Image ${i + 1}`}
                                            className="hi"
                                            onClick={() => handleClick(movie)}
                                        />
                                        <div className="tooltip">
                                            <h1>{movie.title}</h1>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <i className='bx bxs-star' style={{ color: 'gold' }}></i>
                                                <p style={{ margin: '0 0 0 5px' }}>{movie.vote_average}</p>
                                            </div>
                                            <p>Release Date: {movie.release_date}</p>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <h1>New Release</h1>
            <NewRelease />

            <PosterList />
            <Recommendations />
            <TvShows />
            <Footer />
        </>
    );
}

export default Home;

