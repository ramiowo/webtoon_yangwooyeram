import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import Sub from "./pages/Sub";
import PageNotFound from "./pages/PageNotFound";
import styled from "styled-components";

const Wrap = styled.div`
  max-width: 1400px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
`;

const WebtoonApp = () => {
  return (
    <HashRouter>
      <Wrap>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/sub/:id" element={<Sub />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </Wrap>
    </HashRouter>
  );
};

export default WebtoonApp;
