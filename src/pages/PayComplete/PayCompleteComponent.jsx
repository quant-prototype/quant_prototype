import styled from "styled-components";
import notificationImg from "../../assets/Notification.png";
import PayAmountComponent from "./PayAmountComponent";
import StandardButton from "../../shared/StandardButton";
import { useEffect, useState } from "react";
import QRPay from "../QRpay/QRPay";

const ButtonContainer = styled.div`
  position: fixed;
  bottom: 46px;
  left: 50%;
  transform: translate(-50%, 0);
  gap: 14px;
`;

export default function PayCompleteComponent() {
  const [showQR, setShowQR] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowQR(false);
    }, 3000);

    return () => clearTimeout(timer);
  });

  return (
    <>
      {showQR ? (
        <QRPay />
      ) : (
        <>
          <img src={notificationImg} alt="notificationImg" />
          <PayAmountComponent payAmount={40000} memberCount={4} />
          <ButtonContainer>
            <StandardButton
              title="홈 화면으로 이동하기"
              width={347}
              height={64}
              backgroundColor="#191970"
            />
          </ButtonContainer>
        </>
      )}
    </>
  );
}
