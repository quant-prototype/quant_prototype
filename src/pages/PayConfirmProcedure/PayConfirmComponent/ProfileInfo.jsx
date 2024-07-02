import { useState } from "react";
import styled from "styled-components";
import profileImg from "../../../assets/profile.svg";

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
  cursor: pointer;
`;

export default function ProfileInfo({index, info, selectHandler}) {
  return (
    <>
      <MemberContainer>
        <ProfileContainer>
          <ProfileImg src={profileImg} alt="profileImg" />
          <ProfileDetailContainer>
            <NameText>{info.name}</NameText>
            <PhoneNumber>{info.phone}</PhoneNumber>
          </ProfileDetailContainer>
        </ProfileContainer>
        <SelectButton
          selected={info.selected}
          onClick={() => selectHandler(index)}
        />
      </MemberContainer>
    </>
  );
}
