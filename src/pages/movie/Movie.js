//libraries
import { Suspense } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router";

//hooks
import useApi from "../../hooks/useApi";

//styles
import { StyledMovieCard, Poster, InfoContainer, ReleaseDate } from "./styles";
import { BigTitle } from "../../styles/generic";

export default function Movie() {
  const params = useParams();
  const { id } = params;
  const link =
    "https://api.themoviedb.org/3/movie/" +
    id +
    "?api_key=" +
    process.env.REACT_APP_API_KEY;
  const movieData = useApi(link);
  const imgSrc = "https://image.tmdb.org/t/p/original/" + movieData.poster_path;

  return (
    <StyledMovieCard
      initial={{ height: "100px" }}
      animate={{ height: "100%" }}
      transition={{ duration: 0.5 }}
    >
      {!!movieData.poster_path && (
        <Suspense fallback={<>Loading img...</>}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Poster src={imgSrc} />
          </motion.div>
        </Suspense>
      )}

      <InfoContainer>
        <BigTitle>{movieData.title}</BigTitle>
        <ReleaseDate>{`Release Date: ${movieData.release_date}`}</ReleaseDate>
        {movieData.overview}
      </InfoContainer>
    </StyledMovieCard>
  );
}
