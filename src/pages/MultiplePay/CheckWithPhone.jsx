import statusBar from '../../assets/statusBar.svg';
import indicator from '../../assets/indicator.svg';
import styled from 'styled-components';
import keyPad from '../../assets/keyPad.svg';
import StandardButton from '../../shared/StandardButton';
import { useState } from 'react';

const ImageWrapper = styled.div`
width: 430px;
height: auto;
object-fit:contain
`

const IndicatorWrapper = styled.div`
position: fixed;
bottom: 0;
width: 430px;
height: auto;
object-fit:contain
`

const Img = styled.img`
width: 430px;
height: auto;
object-fit:contain
`

const ComponentContainer = styled.div`
  background-color: #262D3E;
  height: 860px;
`

const Title = styled.div`
  color: white;
    font-size: 25px;
    margin-top: 107px;
    font-weight: SemiBold;
    font-family: "Pretendard", sans-serif;
    line-height: 1.4;
    text-align: center;
`

const Dot = styled.div`
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background-color: ${(props) => props.active ? '#494949' : '#D9D9D9'};
`;

const PwContainer = styled.div`
  margin-top: 66px;
  display: flex;
  gap: 25px;
  justify-content: center;
`

const Button = styled.div`
  cursor: pointer;
  background-color: #555A66;
  border-radius: 5px;
  width: 74px;
  height: 29px;
  color: #BEBEBE;
  font-size: 10px;
  font-weight: Regular;
  font-family: "Pretendard", sans-serif;
  text-align: center;
  padding-top: 8px;
  margin-left: 178px;
  margin-top: 57px;
`
const KeyPad = styled.img`
  margin-left: 68px;
  margin-top: 30px;
`

const ButtonContainer = styled.div`
  width: 430px;
  position: fixed;
  bottom: 46px;
  background-color: #262D3E;
  padding-left: 34px;
`

function GroupPw(){

  const [activeDots, setActiveDots] = useState([false, false, false, false]);
  const handleKeypadClick = () => {
    setActiveDots((prev) => {
      const nextIndex = prev.findIndex(dot => dot === false);
      if (nextIndex === -1) return [false, false, false, false]; // reset if all dots are active
      return prev.map((dot, index) => index === nextIndex ? true : dot);
    });
  };

  return(
    <>
    <ImageWrapper>
        <Img src={statusBar} style={{background: "#F3F4F7"}}/>
    </ImageWrapper>

    <ComponentContainer>
      <Title>우리 동아리 회비의<br/>비밀번호를 입력해주세요.</Title>
      <PwContainer>
        {activeDots.map((active, index) => <Dot key={index} active={active} />)}
      </PwContainer>

      <Button>입력값 보기</Button>

      <KeyPad src={keyPad} onClick={handleKeypadClick}/>
      <ButtonContainer>
      <StandardButton title="입력하기" backgroundColor="#D9D9D9" color="black" height="64px" width="360px" style={{marginLeft:"34px"}}/>
      </ButtonContainer>

    </ComponentContainer>
    
    

    <IndicatorWrapper style={{background:"#262D3E"}}>
        <Img src={indicator} />
    </IndicatorWrapper>
    </>
  );
}

export default GroupPw;