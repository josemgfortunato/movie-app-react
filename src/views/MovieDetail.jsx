import { useEffect, useState } from "react";
import { MovieService } from "../api/MovieService";
import { useParams } from "react-router-dom";
import { MovieDetailComp } from "../components/MovieDetailCard";

export const MovieDetail = () => {
  const [movie, setMovie] = useState({});
  const params = useParams();

  const getMovie = async () => {
    const { data } = await MovieService.getMovieDetail(params.id);
    setMovie(data);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
      <div>
        <MovieDetailComp movie={movie}/>
      </div>
  )
};
