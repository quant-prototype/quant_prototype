import styled from "styled-components";
import notificationImg from "../../../../assets/groupNotification.svg";
import PayAmountComponent from "./PayAmountComponent";
import StandardButton from "../../../../shared/StandardButton";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../../../../style/PageWrapper";

const ButtonContainer = styled.div`
  position: fixed;
  bottom: 46px;
  left: 50%;
  transform: translate(-50%, 0);
  gap: 14px;
`;

const NotificationContent = styled.img`
  background: #dddfdf;
  border-radius : 26px;
  // margin-left: 10px;
  // margin-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  position: fixed;
  top: ${(props) => (props.visible ? 0 : "-100px")};
  left: 50%;
  transform: translateX(-50%);
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: top 0.5s ease-in-out, opacity 0.5s ease-in-out;
`

export default function PayCompleteComponent() {
  const navigate = useNavigate();
  const handleButtonClick=()=>{
    navigate('/');
  }
  const [isNotificationVisible, setNotificationVisible] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => {
      setNotificationVisible(true);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  return (
        <PageWrapper>
          <NotificationContent
        src={notificationImg}
        alt="Notification"
        visible={isNotificationVisible}
      />
          <PayAmountComponent payAmount={210000} memberCount={10} />
          <ButtonContainer>
            <StandardButton
              title="홈 화면으로 이동하기"
              width={347}
              height={64}
              backgroundColor="#191970"
              onClick={handleButtonClick}
            />
          </ButtonContainer>
    </PageWrapper>
  );
}
