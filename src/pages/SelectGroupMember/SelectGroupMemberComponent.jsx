import styled from "styled-components";
import HeaderComponent from "../PayConfirmProcedure/PayConfirmComponent/HeaderComponent";
import ProfileInfo from "../PayConfirmProcedure/PayConfirmComponent/ProfileInfo";
import { useState, useEffect } from "react";
import StandardButton from "../../shared/StandardButton";
import { useNavigate } from "react-router-dom";

const SelectAllButton = styled.button`
  width: 79px;
  background-color: #b0b0e0;
  border-radius: 3px;
  color: black;
  font-size: 10px;
  font-weight: 400;
  padding: 10px 6px;
  margin-top: 26px;
  margin-left: 43px;
  font-family: "Pretendard", sans-serif;
`;

const GroupContainer = styled.div`
  height: 370px;
  overflow: scroll;
  margin-top: 12px;
`;

const ButtonContainer = styled.div`
  position: fixed;
  bottom: 46px;
  left: 50%;
  transform: translate(-50%, 0);
  gap: 14px;
`;

export default function SelectGroupMemberComponent() {
  const navigate=useNavigate();

  const [isActive, setIsActive] = useState(false);
  const [profileInfo, setProfileInfo] = useState([
    {
      name: "너하나",
      phone: "010-1234-5678",
      selected: false,
    },
    {
      name: "나하나",
      phone: "010-1234-5678",
      selected: false,
    },
    {
      name: "강하나",
      phone: "010-1234-5678",
      selected: false,
    },
    {
      name: "약하나",
      phone: "010-1234-5678",
      selected: false,
    },
    {
      name: "조아하나",
      phone: "010-1234-5678",
      selected: false,
    },
    {
      name: "시러하나",
      phone: "010-1234-5678",
      selected: false,
    },
    {
      name: "차하나",
      phone: "010-1234-5678",
      selected: false,
    },
    {
      name: "지하나",
      phone: "010-1234-5678",
      selected: false,
    },
  ]);

  const selectHandler = (index) => {
    setProfileInfo((prevProfileInfo) => {
      return prevProfileInfo.map((info, infoIndex) => {
        return infoIndex === index
          ? { ...info, selected: !info.selected }
          : info;
      });
    });
  };

  const selectAllHandler = () => {
    setProfileInfo((prevProfileInfo) =>
      prevProfileInfo.map((info) => ({
        ...info,
        selected: true,
      }))
    );
  };

  useEffect(() => {
    if(profileInfo.some(info => info.selected ===  true)) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [profileInfo])

  const checkGroumMoneyHandler = () => {
    navigate("/askGroupPay");
  }

  return (
    <>
      <HeaderComponent title="정산에 포함될 인원을 선택해주세요." />
      <SelectAllButton onClick={selectAllHandler}>
        그룹 전체 선택
      </SelectAllButton>
      <GroupContainer>
        {profileInfo.map((info, index) => {
          return (
            <ProfileInfo
              key={index}
              info={info}
              index={index}
              selectHandler={selectHandler}
            />
          );
        })}
      </GroupContainer>
      <ButtonContainer>
        <StandardButton title="결제하기" width={347} height={64} backgroundColor={isActive ? "#191970" : "white"} color={isActive ? "white" : "black"} onClick={checkGroumMoneyHandler}/>
      </ButtonContainer>
    </>
  );
}
