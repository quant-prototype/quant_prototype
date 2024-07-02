import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./style/globalStyle";
import Home from "./pages/Home";
import ConfirmMember from "./pages/PayConfirmProcedure/ConfirmMember/ConfirmMember";
import QRPay from "./pages/QRpay/QRPay";
import PayComplete from "./pages/PayComplete/PayComplete";
import AddWithRadar from "./pages/SinglePay/AddWithRadar/AddWithRadar";

const Wrapper = styled.div`
  margin: 0 auto; 
  min-width: 430px; 
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
          <Route path="/pay" element={<QRPay />} />
          <Route path="/payComplete" element={<PayComplete />} />
          <Route path="/radar" element={<AddWithRadar/>}/>
        </Routes>
      </Wrapper>
    </>
  );
}

export default App;
