import styled from "styled-components";
import backImg from "../../../assets/backImg.svg";

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
  // white-space: pre-wrap;
  width: 220px;
  line-height: 40px;
`;

export default function HeaderComponent({title, back}) {
  return (
    <>
      <BackButton src={backImg} alt="backImg" onClick={back} />
      <TitleText>{title}</TitleText>
    </>
  )
} 