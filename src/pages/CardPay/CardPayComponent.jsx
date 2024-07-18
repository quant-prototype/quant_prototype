import logo from "../../assets/payLogo.svg";
import styled from "styled-components";
import qr from "../../assets/payQrImg.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../../style/PageWrapper";
import HeaderComponent from "../PayConfirmProcedure/PayConfirmComponent/HeaderComponent";
import card from "../../assets/Card.svg";

const Logo = styled.img`
  width: 89px;
  height: 38px;
  margin-top: 26px;
  margin-left: 170px;
`;

const Content = styled.div`
  font-size: 25px;
  font-weight: Bold;
  font-family: "Pretendard", "sans-serif";
  margin-left: 79px;
  margin-top: 44px;
`;

const Code = styled.img`
  width: 280px;
  height: 178px;
  margin-left: 75px;
  margin-top: 26px;
`;

const Warning = styled.div`
  font-size: 18px;
  font-weight: Medium;
  font-family: "Pretendard", "sans-serif";
  margin-left: 92px;
  margin-right: 91px;
  margin-top: 300px;
  cursor: pointer;
  border-bottom: 1px solid black;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // justify-content: center;
  // color: white;
  // font-size: 20px;
  // font-family: "Pretendard", "sans-serif";
  z-index: 10;
`;

const Modal = styled.div`
  background-color: white;
  z-index: 100;
  width: 382px;
  height: 383px;
  border-radius: 15px;
  position: fixed;
  bottom: 15px;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalStatusBar = styled.div`
  width: 70px;
  height: 4px;
  background-color: #d9d9d9;
  border-radius: 7px;
  margin-top: 9px;
`;
const ModalTitleText = styled.p`
  font-weight: 700;
  font-size: 22px;
  font-family: "Pretendard", "sans-serif";
  margin-top: 33px;
`;

const ModalInfoContainer = styled.div`
  width: 100%;
`;

const ModalInfoBox = styled.div`
  margin-top: ${(props) => {
    if (props.store) {
      return "33px";
    } else if (props.price) {
      return "15px";
    } else {
      return 0;
    }
  }};
  padding: 0 25px 0 25px ;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ModalInfoText = styled.p`
  font-size: 17px;
  font-weight: 700;
  font-family: "Pretendard", "sans-serif";
  color: #818181;
`;

const ModalInfoDetailText = styled.p`
  font-weight: 400;
  font-size: 17px;
  font-family: "Pretendard", "sans-serif";
  color: black;
`;

const ButtonComponentBox = styled.div`
  margin-top: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
`

const ButtonComponent = styled.button`
  width: 159px;
  height: 48px;
  border-radius: 6px;
  border: none;
  background-color: ${(props) => {
    if(props.no) {
      return "#B0B0E0";
    } else if(props.yes) {
      return "#191970";
    } else {
      return "white";
    }
  }};
  color: white;
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  font-family: "Pretendard", "sans-serif";
`

function CardPayComponent() {
  const [afterPay, setAfterPay] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      // navigate("/payComplete");
      setAfterPay(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <PageWrapper>
      {afterPay && (
        <Overlay>
          <Modal>
            <ModalStatusBar />
            <ModalTitleText>아래의 결제 내역이 맞나요?</ModalTitleText>
            <ModalInfoContainer>
              <ModalInfoBox store>
                <ModalInfoText>가맹점 정보</ModalInfoText>
                <ModalInfoDetailText>스타벅스 분당점</ModalInfoDetailText>
              </ModalInfoBox>
              <ModalInfoBox price>
                <ModalInfoText>결제 금액</ModalInfoText>
                <ModalInfoDetailText>300,000원</ModalInfoDetailText>
              </ModalInfoBox>
              <ButtonComponentBox>
                <ButtonComponent no>아니에요</ButtonComponent>
                <ButtonComponent yes>네, 맞아요</ButtonComponent>
              </ButtonComponentBox>
            </ModalInfoContainer>
          </Modal>
        </Overlay>
      )}
      <HeaderComponent back={handleBackButtonClick} />
      <Logo src={logo}></Logo>
      {afterPay ? (
        <Content>카드 결제를 기다리고 있어요</Content>
      ) : (
        <Content>카드 결제가 감지되었어요!</Content>
      )}
      <Code src={card}></Code>
      <Warning>결제가 끝났는데 화면이 안넘어가요</Warning>
    </PageWrapper>
  );
}

export default CardPayComponent;
