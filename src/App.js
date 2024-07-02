import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./style/globalStyle";
import Home from "./pages/Home";
import ConfirmMember from "./pages/PayConfirmProcedure/ConfirmMember/ConfirmMember";
import QRPay from "./pages/QRpay/QRPay";
import PayComplete from "./pages/PayComplete/PayComplete";
import AddWithRadar from "./pages/SinglePay/AddWithRadar/AddWithRadar";
import AskGroupPay from "./pages/MultiplePay/GroupMoney/AskGroupMoney"
import AddMemberByPhoneNumber from "./pages/AddMemberByPhoneNumber/AddMemberByPhoneNumber";
import GroupQRPay from "./pages/MultiplePay/GroupQRpay/GroupQRPay";
import SelectGroupMember from "./pages/SelectGroupMember/SelectGroupMember";
import GroupPayComplete from "./pages/MultiplePay/GroupMoney/GroupComplete/PayComplete";
import UseGroupMoney from "./pages/MultiplePay/UseGroupMoney/UseGroupMoney";


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
          <Route path="/addMemberByPhoneNumber" element={<AddMemberByPhoneNumber />} />
          <Route path="/pay" element={<QRPay />} />
          <Route path="/payComplete" element={<PayComplete />} />
          <Route path="/radar" element={<AddWithRadar/>}/>
          <Route path="/useGroupMoney" element={<UseGroupMoney/>}/>
          <Route path="/selectGroupMember" element={<SelectGroupMember />} />
          <Route path="/askGroupPay" element={<AskGroupPay/>}/>
          <Route path="/groupQr" element={<GroupQRPay/>}/>
          <Route path="groupPayComplete" element={<GroupPayComplete/>}/>
        </Routes>
      </Wrapper>
    </>
  );
}

export default App;
