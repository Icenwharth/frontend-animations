//libraries
import React, { useState } from "react";
import useApi from "../../hooks/useApi";

//components
import CustomButton from "../../components/customButton/CustomButton";
import MovieCard from "../../components/movieCard/MovieCard";
import Search from "../../components/search/Search";

//styles
import { CardsContainer, ButtonsContainer, ListElement } from "./styles";
import { MediumTitle } from "../../styles/generic";

export default function MainPage() {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

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

  const filterMovies = (data, searchQuery) => {
    if (!searchQuery) {
      return data.results;
    }

    return data.results.filter((movie) => {
      const movieTitle = movie.title.toLowerCase();
      return movieTitle.includes(searchQuery.toLowerCase());
    });
  };

  const filteredData = filterMovies(data, searchQuery);
  return (
    <>
      <Search
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        placeholder={"Search for a Movie"}
      />

      <CardsContainer>
        {filteredData?.map((res, i) => (
          <ListElement
            key={res.title + i}
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.3 * i, type: "easeIn" }}
          >
            <MovieCard movie={res} delay={0.5 * i} />
          </ListElement>
        ))}
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
