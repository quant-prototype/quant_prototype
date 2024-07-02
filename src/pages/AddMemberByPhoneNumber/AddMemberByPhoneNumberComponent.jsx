import styled from "styled-components";
import HeaderComponent from "../PayConfirmProcedure/PayConfirmComponent/HeaderComponent";
import ProfileInfo from "../PayConfirmProcedure/PayConfirmComponent/ProfileInfo";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import StandardButton from "../../shared/StandardButton";

const NumberInputContainer = styled.div`
  margin: 0 auto;
  margin-top: 25px;
  width: 80%;
`;

const NumberInputText = styled.p`
  color: #000000;
  font-family: "Pretendard", sans-serif;
  font-weight: 300;
  font-size: 16px;
  // opacity: 90%;
`;

const NumberInputFieldBox = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #dfdfdf;
  margin-top: 12px;
  padding: 9px 0;
  border-radius: 6px;
  position: relative;
`;

const FixNumber = styled.p`
  font-family: "Pretendard", sans-serif;
  font-weight: 300;
  font-size: 15px;
  color: black;
  margin-left: 7px;
  margin-right: 7px;
`;

const Partition = styled.div`
  background-color: black;
  // border: 1px solid black;
  width: 10px;
  height: 0.5px;
`;

const NumberInputField = styled.input`
  border: none;
  outline: none;
  font-size: 15px;
  font-family: "Pretendard", sans-serif;
  font-weight: 300;
  color: black;
  width: 80px;
  text-align: center;
`;

const AddButton = styled.button`
  background-color: #b0b0e0;
  border-radius: 3px;
  color: black;
  font-size: 10px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 5%;
  padding: 6px 12px;
  font-family: "Pretendard", sans-serif;
`;

const RecommendText = styled.p`
  font-family: "Pretendard", sans-serif;
  font-weight: 300;
  font-size = 16px;
  color: black;
  margin-left: 43px;
  margin-top: 34px;
`;

const ButtonContainer = styled.div`
  position: fixed;
  bottom: 46px;
  left: 50%;
  transform: translate(-50%, 0);
  gap: 14px;
`;

export default function AddMemberByPhoneNumberComponent() {
  const [phoneNumber, setPhoneNumber] = useState({ part2: "", part3: "" });
  const [isActive, setIsActive] = useState(false);

  const [profileInfo, setProfileInfo] = useState([
    {
      name: "김건우",
      phone: "010-1234-5678",
      selected: false,
    },
    {
      name: "김지은",
      phone: "010-1234-5678",
      selected: false,
    },
    {
      name: "박제준",
      phone: "010-1234-5678",
      selected: false,
    },
    {
      name: "이세은",
      phone: "010-1234-5678",
      selected: false,
    },
  ]);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    if (/^\d*$/.test(value)) {
      setPhoneNumber({ ...phoneNumber, [name]: value });
    }
  };

  const selectHandler = (index) => {
    setProfileInfo((prevProfileInfo) => {
      return prevProfileInfo.map((info, infoIndex) => {
        return infoIndex === index
          ? { ...info, selected: !info.selected }
          : info;
      });
    });
  };

  useEffect(() => {
    if (profileInfo.some(info => info.selected)) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [profileInfo]);

  const navigate = useNavigate();

  const goBackHandler = () => {
    navigate(-1);
  };

  const addMemberHandler = () => {
    if((profileInfo.some((info) => info.selected === true)) || (phoneNumber.part2.length == 4 && phoneNumber.part3.length == 4)) {
      navigate("/confirmMember");
    }
  }

  return (
    <>
      <HeaderComponent
        title="전화번호를 입력해서 추가해주세요."
        back={goBackHandler}
      />
      <NumberInputContainer>
        <NumberInputText>전화번호 입력</NumberInputText>
        <NumberInputFieldBox>
          <FixNumber>010</FixNumber>
          <Partition />
          <NumberInputField
            maxLength={4}
            name="part2"
            value={phoneNumber.part2}
            onInput={inputHandler}
          />
          <Partition />
          <NumberInputField
            maxLength={4}
            name="part3"
            value={phoneNumber.part3}
            onInput={inputHandler}
          />
          {/* <AddButton>추가</AddButton> */}
        </NumberInputFieldBox>
      </NumberInputContainer>
      <RecommendText>최근에 자주 함께했던 사람</RecommendText>
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
      <ButtonContainer>
        <StandardButton
          title="추가하기"
          width={347}
          height={64}
          backgroundColor={isActive ? "#191970" : "white"} 
          color={isActive ? "white" : "black"}
          onClick={addMemberHandler}
        />
      </ButtonContainer>
    </>
  );
}
