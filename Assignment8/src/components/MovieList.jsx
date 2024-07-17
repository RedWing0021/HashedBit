import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const movies = [
  { id: 1, title: 'Kill', imgSrc: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kill-et00374797-1718179453.jpg' },
  { id: 2, title: 'Munjya', imgSrc: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/munjya-et00398936-1716358299.jpg' },
  { id: 3, title: 'The Greatest of All Time', imgSrc: 'https://preview.redd.it/the-greatest-of-all-time-new-poster-v0-21g6479eu68d1.jpeg?auto=webp&s=dc36f40c9fa8d22ab6c2149b730324f4e86ed401' },
  { id: 4, title: 'Kalki 2898 AD', imgSrc: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kalki-2898-ad-et00352941-1718275859.jpg' },
];

const MovieList = () => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div className="movie-item" key={movie.id}>
          <img src={movie.imgSrc} alt={movie.title} />
          <h3>{movie.title}</h3>
          <Link to={`/details/${movie.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;