import { useNavigate } from "react-router-dom";
import HeaderComponent from "../../PayConfirmProcedure/PayConfirmComponent/HeaderComponent";
import StandardButton from "../../../shared/StandardButton";
import { styled } from 'styled-components'
import backImg from "../../../assets/backImg.svg";
import { useEffect, useState } from "react";
import PageWrapper from "../../../style/PageWrapper";

const BackButton = styled.img`
  margin-top: 11.82px;
  margin-left: 43px;
  width: 21px;
  height: 18.38px;
  cursor: pointer;
`;

const Center = styled.div`
margin-top: 38px;
display: flex;
// flex-direction: column;
justify-content: center;
align-items: center
`

const InputContainer = styled.div`
width: 344px;
height: 60px;
border-radius: 12px;
border: 1.5px solid black;
padding: 10px 0px 7px 17px
`
const TitleText = styled.p`
  color: black;
  font-size: 25px;
  margin-left: 43px;
  margin-top: 24.63px;
  font-weight: 600;
  font-family: "Pretendard", sans-serif;
  // white-space: pre-wrap;
  width: 280px;
  line-height: 40px;
`;

const InputTitle = styled.div`
font-weight: SemiBold;
font-size: 10px;

`

const Input = styled.input`
border: none;
background-color: transparent;
margin-top: 7px;
font-size: 15px;
padding: 0
`

const SubText = styled.div`
display: flex;
justify-content: space-between;
margin-top: -28px;
font-size: 10px;
font-weight: 500;
width: 344px;
padding: 0 17px 0 17px;
`


function Main (){

    const navigate = useNavigate()

    const [targetText, setTargetText] = useState('')
    const [isTextCorrect, setIsTextCorrect] = useState(false)

    function handleIsTextCorrect(){
      if(targetText === '25000'){
        setIsTextCorrect(true)
      }
    }

    function handleButtonClick(){
      navigate('/groupQr')
    }

    useEffect(()=>{
      handleIsTextCorrect()
    },[targetText])

    return(
        <PageWrapper>
        <BackButton src={backImg} alt="backImg" onClick={()=>navigate(-1)} />
        <TitleText>우리 동아리의 회비는 310,000원이 남았습니다. 얼마를 사용하시겠습니까?</TitleText>

        <Center>
        <InputContainer>
        <InputTitle>사용 금액</InputTitle>
        <Input placeholder="얼마를 사용할까요?" onChange={(e)=>{
            setTargetText(e.target.value)
        }} />
        </InputContainer>
        </Center>

        <Center>
          <SubText>
            <div>거래후 잔액</div>
            {isTextCorrect ? (
              <div>285,000원</div>
            ): <div>310,000원</div>}
          </SubText>
        </Center>

        <div style={{
          position: 'fixed',
          bottom: '46px',
          left: '50%',
          transform: 'translate(-50%, 0)'
        }}>
        <StandardButton title='결제하기' height='64px' width='347px' backgroundColor = {targetText !== '' ? '#191970': 'white'} color = {targetText !== '' ? 'white': 'black'} onClick={handleButtonClick} />
        </div>
        </PageWrapper>
    )
}
export default Main;