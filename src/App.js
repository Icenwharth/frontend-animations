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
  padding: 10px 20px;
  border-radius: 5px;
`;

function App() {
  return (
    <AppContainer className="App">
      <PageContainer>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/movie/:id" element={<Movie />} />
          </Routes>
        </BrowserRouter>
      </PageContainer>
    </AppContainer>
  );
}

export default App;
