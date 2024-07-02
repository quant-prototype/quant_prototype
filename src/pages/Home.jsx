
import React from 'react';
import statusBar from '../assets/whiteStatusBar.svg';
import indicator from '../assets/indicator.svg';
import styled from 'styled-components';
import logo from '../assets/logoQuant.svg';
import alert from '../assets/alert.png';
import userImg from '../assets/userImg.png';
import StandardButton from '../shared/StandardButton';
import homeGray from '../assets/homeGray.svg';
import groupGray from '../assets/groupGray.svg';
import plusButton from '../assets/mainPlus.svg';
import blueHome from '../assets/blueHome.svg';
import blueGroup from '../assets/blueGroup.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

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

const Profile = styled.div`
  height: 201px;
  background-color: #191970;
  widht: 100%;
  border-bottom-left-radius: 45px; 
  border-bottom-right-radius: 45px;
`

const LogoImg = styled.img`
  width: 90px;
  height: 30px;
  margin-left : 40px;
  margin-top: 10px;
`

const Alert = styled.img`
  width: 24px;
  height: 28px;
  margin-top: 10px;
  margin-left: 242px;
  cursor: pointer;
`

const IntroDiv = styled.div`
  margin-top: 31px;
  margin-left: 40px;
  display: flex;
`

const ProfileImg = styled.img`
  widht: 90px;
  height: 90px;
`

const ContentDiv = styled.div`
  margin-left: 14px;
  margin-top: 15px;
`

const Name = styled.div`
  color: white;
  font-family: 'Pretendard', sans-serif;
  font-weight: bold;
  font-size: 26px;
`

const Account = styled.div`
  color: white;
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 16px;
  border-bottom: 0.4px solid #C7C7C7;
  margin-top: 17px;
`;

const Group = styled.div`
  margin-left: 32px;
  padding-top: 24px;
`

const GroupTitle = styled.div`
color: black;
font-family: 'Pretendard', sans-serif;
font-weight: bold;
font-size: 26px;
`

const ContentContainer = styled.div`
  margin-top: 18px;
  display: flex;
  gap: 7px;
`

const GroupContent = styled.div`
width : 298px;
height: 88px;
background: white;
border-radius: 15px;
display: flex;
gap: 80px;
padding-top: 20px;
padding-left: 25px;
`

const GroupContentContainer = styled.div`
  
`
const GroupName = styled.div`
color: black;
font-family: 'Pretendard', sans-serif;
font-weight: bold;
font-size: 20px;
margin-bottom: 8px;
`

const GroupCnt = styled.div`
color: black;
font-family: 'Pretendard', sans-serif;
font-weight: medium;
font-size: 13px;
`

const Bar = styled.div`
background-color : #C6C6C6;
width: 100%;
height: 14px;
margin-top: 18px;
`

const SpendContent = styled.div`
  width: 373px;
  height: 88px;
  background : white;
  border-radius : 15px;
  margin-left: 32px;
  margin-top: 18px;
  display: flex;
  padding-left: 21px;
  padding-top: 17px;
`

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-right: 115px;
`

const SpendTitle = styled.div`
  color: black;
  font-family: 'Pretendard', sans-serif;
  font-weight: regular;
  font-size: 10px;
`

const Money = styled.div`
  color: black;
  font-family: 'Pretendard', sans-serif;
  font-weight: SemiBold;
  font-size: 25px;
`

const Nav = styled.div`
height : 113px;
width : 100%;
background: white;
position : absolute;
bottom: 0px;
padding-top: 24px;
`

const HomeIcon = styled.img`
margin-left: 84px;
cursor: pointer;
`

const GroupIcon = styled.img`
margin-left: 207px;
cursor: pointer;
`

const PlusButton = styled.img`
width : 130px;
height: 130px;
position: absolute;
bottom: 40px;
z-index: 10;
left: 147px;
cursor: pointer;
`

function Home() {

  const [homeIconSrc, setHomeIconSrc] = useState(homeGray); 
  const [groupIconSrc, setGroupIconSrc] = useState(groupGray);

  const navigate = useNavigate();
  const handlePlusButtonClick = () => {
    navigate('/Radar');
  };
  const handleGroupButtonClick = () => {
    navigate('/selectGroupMember');
  };

  return(
    <>
        <ImageWrapper style={{background: "#191970"}}>
            <Img src={statusBar} style={{background: "#191970"}}/>
        </ImageWrapper>
        
        <Profile>
          <div>
            <LogoImg src={logo}/>
            <Alert src={alert}/>
          </div>
          <IntroDiv>
            <ProfileImg src={userImg}/>
            <ContentDiv>
              <Name>김하나</Name>
              <Account>하나은행 1000-1000-1000</Account>
            </ContentDiv>
          </IntroDiv>
        </Profile>

        <Group>
          <GroupTitle>나의 그룹</GroupTitle>
          <ContentContainer>
            <GroupContent>
              <GroupContentContainer>
                <GroupName>어니스트 섀클턴</GroupName>
                <GroupCnt>4명</GroupCnt>
              </GroupContentContainer>
              <StandardButton title='정산하기' backgroundColor='#B4B4E7' color='black' width='43px' height='24px' onClick={handleGroupButtonClick}/>
            </GroupContent>

            <GroupContent style={{width: "93px", borderTopRightRadius:"0px", borderBottomRightRadius:"0px"}}>
              <GroupContentContainer style = {{width: '95px'}}>
                <GroupName>섀클턴</GroupName>
                <GroupCnt>4명</GroupCnt>
              </GroupContentContainer>
            </GroupContent>
          </ContentContainer>
        </Group>

        <Bar/>

        <GroupTitle style={{marginLeft: "32px", marginTop:"31px"}}>6월의 정산</GroupTitle>
        <SpendContent>
          <DetailContainer>
            <SpendTitle>6월에 김하나님이 정산으로 사용한 돈이에요.</SpendTitle>
            <Money>292,033 원</Money>
          </DetailContainer>
          <StandardButton title='내역' backgroundColor='#B4B4E7' color='black' width='43px' height='24px'/>
        </SpendContent>

        <PlusButton src={plusButton} onClick={handlePlusButtonClick}/>

        <Nav>
          <HomeIcon src={homeIconSrc}
            onMouseEnter={() => setHomeIconSrc(blueHome)}
            onMouseLeave={() => setHomeIconSrc(homeGray)}
          />
          <GroupIcon src={groupIconSrc}
            onMouseEnter={() => setGroupIconSrc(blueGroup)}
            onMouseLeave={() => setGroupIconSrc(groupGray)}
          />
        </Nav>

        <IndicatorWrapper style={{background:"white"}}>
            <Img src={indicator} />
        </IndicatorWrapper>
      </>
    );
}

export default Home;

