//libraries
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import MainPage from "./pages/main/Main";
import Movie from "./pages/movie/Movie";

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #efefef;
`;

const PageContainer = styled.div`
  width: 350px;
  background-color: #ffffff;
  height: 500px;
  padding: 10px 20px;
`;

const containerDimensions = {
  height: "100px",
  width: "100%",
};

function App() {
  return (
    <AppContainer className="App">
      <PageContainer>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<MainPage dimensions={containerDimensions} />}
              dimensions={containerDimensions}
            />
            <Route
              path="/movie/:id"
              element={<Movie dimensions={containerDimensions} />}
            />
          </Routes>
        </BrowserRouter>
      </PageContainer>
    </AppContainer>
  );
}

export default App;
