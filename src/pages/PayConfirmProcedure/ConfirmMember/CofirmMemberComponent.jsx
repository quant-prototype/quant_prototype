import styled from "styled-components";
import backImg from "../../../assets/backImg.svg";
import profileImg from "../../../assets/profile.svg";
import StandardButton from "../../../shared/StandardButton.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const BackButton = styled.img`
  margin-top: 11.82px;
  margin-left: 43px;
  width: 21px;
  height: 18.38px;
`;

const TitleText = styled.p`
  color: black;
  font-size: 25px;
  margin-left: 43px;
  margin-top: 24.63px;
  font-weight: 600;
  font-family: "Pretendard", sans-serif;
`;

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

const MemberContainer = styled.div`
  display: flex;
  width: 90%;
  margin-top: 14px;
  align-items: center;
  justify-content: space-between;
`;

const ProfileContainer = styled.div`
  display: flex;
`;

const ProfileImg = styled.img`
  margin-left: 43px;
`;

const ProfileDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-left: 7px;
  // align-items: center;
  justify-content: center;
`;

const NameText = styled.p`
  color: black;
  font-size: 12px;
  font-weight: Medium;
  font-family: "Pretendard", sans-serif;
`;

const PhoneNumber = styled.p`
  color: #888888;
  font-size: 12px;
  font-weight: Medium;
  font-family: "Pretendard", sans-serif;
`;

const SelectButton = styled.div`
  border-radius: 50%;
  width: 23.54px;
  height: 23.54px;
  background-color: ${({ selected }) => (selected ? "#2A2ABB" : "transparent")};
  border: 2px solid #2a2abb;
`;

const AddMoreMemberText = styled.p`
  font-family: "Pretendard", sans-serif;
  font-weight: Regular;
  font-size: 15px;
  color: #888888;
  border-bottom: 1px solid #A8A8A8;
  margin: 0 auto;
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
      name: "이하나",
      phone: "010-1234-5678",
      selected: false,
    }, {
      name: "김하나",
      phone: "010-1234-5678",
      selected: false,
    }, {
      name: "박하나",
      phone: "010-1234-5678",
      selected: false,
    }, {
      name: "강하나",
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


  const navigate = useNavigate();

  const goBackHandler = () => {
    navigate(-1);
  };

  return (
    <>
      <BackButton src={backImg} alt="backImg" onClick={goBackHandler} />
      <TitleText>아래의 인원이 맞나요?</TitleText>
      <MemberCountContainer>
        <MemberCountText>총 {profileInfo.length}명</MemberCountText>
        <SelectAllButton onClick={selectAllHandler}>전체 선택하기</SelectAllButton>
      </MemberCountContainer>
      {profileInfo.map((info, index) => {
        return (
          <MemberContainer key={index}>
            <ProfileContainer>
              <ProfileImg src={profileImg} alt="profileImg" />
              <ProfileDetailContainer>
                <NameText>{info.name}</NameText>
                <PhoneNumber>{info.phone}</PhoneNumber>
              </ProfileDetailContainer>
            </ProfileContainer>
            <SelectButton selected={info.selected} onClick={() => selectHandler(index)} />
          </MemberContainer>
        );
      })}
      <ButtonContainer>
        <AddMoreMemberText>추가되지 않은 인원이 있어요</AddMoreMemberText>
        <ButtonBox>
          <StandardButton title="결제하기" backgroundColor="white" color="black" />
          <StandardButton title="선택 인원 삭제하기" backgroundColor="white" color="black" />
        </ButtonBox>
      </ButtonContainer>
    </>
  );
}
