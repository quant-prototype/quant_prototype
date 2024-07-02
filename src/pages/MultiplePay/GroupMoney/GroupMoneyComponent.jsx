import HeaderComponent from "../../PayConfirmProcedure/PayConfirmComponent/HeaderComponent";
import styled from "styled-components";
import StandardButton from "../../../shared/StandardButton";
import { useNavigate } from "react-router-dom";


const Title = styled.div`
    color: black;
    font-size: 25px;
    margin-left: 43px;
    margin-top: 24.63px;
    font-weight: 600;
    font-family: "Pretendard", sans-serif;
    line-height: 1.4;
`

const ButtonBox = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 40px;
    padding-right: 40px;
    gap: 12px;
    width: 100%
`

const PositionBox = styled.div`
width: 430px;
position: fixed;
  bottom: 46px;
`

function GroupPayComponent(){

    const navigate = useNavigate();
    const handleFalseButtonClick=()=>{navigate('/pay')}

  return(
    <>
        <HeaderComponent/>
        <Title>우리 동아리 회비를<br/>사용하시겠습니까?</Title>
        <PositionBox>
            <ButtonBox>
            <StandardButton title="사용하기" backgroundColor="#191970" color="#FFFFFF" height="64px"/>
            <StandardButton title="사용하지 않기" backgroundColor="white" color="black" height="64px" onClick={handleFalseButtonClick}/>
            </ButtonBox>
        </PositionBox>
    </>
  );
}

export default GroupPayComponent;