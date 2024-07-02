import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./style/globalStyle";
import Home from "./pages/Home";
import ConfirmMember from "./pages/PayConfirmProcedure/ConfirmMember/ConfirmMember";

const Wrapper = styled.div`
  margin: 0 auto; /* 가운데 정렬 */
  min-width: 430px; /* 전체 너비 */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #F3F4F7;
  position: relative;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/confirmMember" element={<ConfirmMember />} />
        </Routes>
      </Wrapper>
    </>
  );
}

export default App;
