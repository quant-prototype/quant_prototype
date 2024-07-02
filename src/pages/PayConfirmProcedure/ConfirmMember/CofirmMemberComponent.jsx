import styled from "styled-components";
import StandardButton from "../../../shared/StandardButton.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import HeaderComponent from "../PayConfirmComponent/HeaderComponent.jsx";
import ProfileInfo from "../PayConfirmComponent/ProfileInfo.jsx";

const MemberCountContainer = styled.div`
  display: flex;
  // margin-left: 43px;
  margin-top: 55px;
  // gap: 213px;
  width: 90%;
  justify-content: space-between;
`;

const MemberCountText = styled.p`
  color: black;
  font-size: 25px;
  font-weight: 600;
  margin-left: 43px;
  font-family: "Pretendard", sans-serif;
`;

const SelectAllButton = styled.button`
  width: 79px;
  height: 24px;
  background-color: #b0b0e0;
  border-radius: 3px;
  color: black;
  font-size: 10px;
  font-weight: 400;
`;

const AddMoreMemberText = styled.p`
  font-family: "Pretendard", sans-serif;
  font-weight: Regular;
  font-size: 15px;
  color: #888888;
  border-bottom: 1px solid #A8A8A8;
  margin: 0 auto;
  cursor: pointer;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 46px;
  left: 50%;
  transform: translate(-50%, 0);
  gap: 14px;
`

const ButtonBox = styled.div`
  width: 347px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export default function ConfirmMemberComponent() {
  const [profileInfo, setProfileInfo] = useState([
    {
      name: "김건우",
      phone: "010-1234-5678",
      selected: false,
    }, {
      name: "김지은",
      phone: "010-1234-5678",
      selected: false,
    }, {
      name: "박제준",
      phone: "010-1234-5678",
      selected: false,
    }, {
      name: "이세은",
      phone: "010-1234-5678",
      selected: false,
    }
  ]);

  const selectHandler = (index) => {
    setProfileInfo((prevProfileInfo) => {
      return prevProfileInfo.map((info, infoIndex) => {
        return ( infoIndex === index ? { ...info, selected: !info.selected } : info)
      })
    })
  };

  const selectAllHandler = () => {
    setProfileInfo(prevProfileInfo =>
      prevProfileInfo.map(info => ({
        ...info,
        selected: true
      }))
    );
  }

  const deleteMemberHandler = () => {
    setProfileInfo((prevInfo) => {
      return prevInfo.filter((info) => info.selected !== true);
    })
  }


  const navigate = useNavigate();

  const goBackHandler = () => {
    navigate(-1);
  };

  const goToPayHandler = () => {
    if(profileInfo.some((info) => info.selected === true)) {
      navigate("/pay");
    }
  }

  return (
    <>
      <HeaderComponent title="아래의 인원이 맞나요?" back={goBackHandler} />
      <MemberCountContainer>
        <MemberCountText>총 {profileInfo.length}명</MemberCountText>
        <SelectAllButton onClick={selectAllHandler}>전체 선택하기</SelectAllButton>
      </MemberCountContainer>
      {profileInfo.map((info, index) => {
        return (
          <ProfileInfo key={index} info={info} index={index} selectHandler={selectHandler} />
        );
      })}
      <ButtonContainer>
        <AddMoreMemberText>추가되지 않은 인원이 있어요</AddMoreMemberText>
        <ButtonBox>
          <StandardButton title="결제하기" backgroundColor="white" color="black" onClick={goToPayHandler} />
          <StandardButton title="선택 인원 삭제하기" backgroundColor="white" color="black" onClick={deleteMemberHandler} />
        </ButtonBox>
      </ButtonContainer>
    </>
  );
}
