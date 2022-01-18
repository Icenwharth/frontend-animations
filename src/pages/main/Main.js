//libraries
import React, { useState } from "react";
import useApi from "../../hooks/useApi";
import { AnimatePresence } from "framer-motion";

//components
import CustomButton from "../../components/customButton/CustomButton";
import MovieCard from "../../components/movieCard/MovieCard";

//styles
import { CardsContainer, ButtonsContainer, ListElement } from "./styles";
import { MediumTitle } from "../../styles/generic";

export default function MainPage({ dimensions }) {
  const [page, setPage] = useState(1);
  const link =
    "https://api.themoviedb.org/3/movie/popular?api_key=" +
    process.env.REACT_APP_API_KEY +
    "&page=" +
    page;

  const data = useApi(link);

  const nextPage = () => {
    if (page + 1 > data.total_pages) return;
    setPage(page + 1);
  };

  const previousPage = () => {
    if (page - 1 < 1) return;
    setPage(page - 1);
  };

  return (
    <>
      <CardsContainer>
        <AnimatePresence>
          {data?.results?.map((res, i) => (
            <ListElement
              key={res.title + i}
              initial={{ x: 500 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.3 * i }}
            >
              <MovieCard movie={res} delay={0.5 * i} dimensions={dimensions} />
            </ListElement>
          ))}
        </AnimatePresence>
      </CardsContainer>

      <ButtonsContainer>
        <CustomButton
          type="bad-action"
          text="Previous"
          onClick={previousPage}
        />
        <MediumTitle>{data.page}</MediumTitle>
        <CustomButton type="action" text="Next" onClick={nextPage} />
      </ButtonsContainer>
    </>
  );
}
