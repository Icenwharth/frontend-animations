//libraries
import { Suspense } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

//styles
import { StyledMovieCard, Poster, InfoContainer, ReleaseDate } from "./styles";
import { BigTitle } from "../../styles/generic";

export default function MovieCard({ movie, delay, dimensions }) {
  const imgSrc = "https://image.tmdb.org/t/p/original/" + movie.poster_path;

  return (
    <StyledMovieCard>
      <Suspense fallback={<>Loading img...</>}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + 0.3 }}
        >
          <Link to={`/movie/${movie.id}`}>
            <Poster src={imgSrc} />
          </Link>
        </motion.div>
      </Suspense>

      <InfoContainer>
        <BigTitle>{movie.title}</BigTitle>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, yoyo: Infinity }}
        >
          <ReleaseDate>{`Release Date: ${movie.release_date}`}</ReleaseDate>
        </motion.div>
        {movie.overview}
      </InfoContainer>
    </StyledMovieCard>
  );
}
