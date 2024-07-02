import BackwardBtn from '../../../assets/backImg.svg'
import logoForRadar from '../../../assets/logoForRadar.png'
import profileOnRadar from '../../../assets/profileOnRadar.svg'
import { styled, keyframes } from 'styled-components'
import StandardButton from '../../../shared/StandardButton'
import profileClicked from '../../../assets/profileClicked.svg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const borderColorAnimation = keyframes`
  0% {
    border-color: #9f9f9f;
  }
  50% {
    border-color: blue;
  }
  100% {
    border-color: #9f9f9f;
  }
`

const Center = styled.div`
width: 100%;
display: flex;
position: fixed;
left: 0px;
bottom: 46px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 23px;
`

const TopLayout = styled.div`
width: 100%;
margin-top: 11.82px;
margin-left: 43px;
margin-bottom: 36px;
`

const Title = styled.div`
margin-top: 24.63px;
font-size: 25px;
font-weight: 600;
color: black
`

const RadarLayout = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
padding-top: 20px;
overflow: hidden;
`

const BigCircle = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
width: 541px;
height: 541px;
border: 1px solid #9F9F9F;
background-color: transparent;
border-radius: 50%;
animation: ${borderColorAnimation} 2s ease-in-out infinite;
`

const MiddleCircle = styled.div`
position: relative;
width: 389px;
height: 389px;
display: flex;
justify-content: center;
align-items: center;
border: 1.5px solid #9F9F9F;
background-color: transparent;
border-radius: 50%;
animation: ${borderColorAnimation} 2s ease-in-out infinite;
`

const SmallCircle = styled.div`
position: relative;
width: 237px;
height: 237px;
display: flex;
justify-content: center;
align-items: center;
border: 1.5px solid #9F9F9F;
background-color: transparent;
border-radius: 50%;
animation: ${borderColorAnimation} 2s ease-in-out infinite;
`

const SubTitle = styled.div`
color: #888888;
font-size: 15;
font-weight: 350;
margin-top: 27px;
cursor: Pointer;
`

const Back = styled.img`
cursor: pointer;
`

function Main(){

    const navigate = useNavigate();
    const handleButtonClick = () => {navigate('/confirmmember');};
    const handleBackButtonClick = () => {navigate('/');};

    return(
        <>
        <TopLayout>
            <Back src={BackwardBtn} style={{marginBottom: 24.62, width: "21px", height: "18.38px"}} onClick={handleBackButtonClick}/>
            <Title>정산에 포함할 인원을</Title>
            <Title>추가해주세요.</Title>
                
        </TopLayout>

            <RadarLayout>
                {/* <BigCircle> */}
                    <MiddleCircle>
                    
                    <ProfileContainer name='김x우' top='-20px' left= '90px '/>

                        <SmallCircle>
                            <ProfileContainer name='이x은' top='-10px' left= '20px '/>
                            <ProfileContainer name='김x은' top='-40px' left= '2o155px '/>
                            <ProfileContainer name='박x준' top='100px' left= '210px '/>

                            <img src={logoForRadar}></img>

                        </SmallCircle>
                </MiddleCircle>
            {/* </BigCircle> */}
            </RadarLayout>

            <div style={{height: '100%'}} />

        <Center>
            <SubTitle>추가되지 않은 인원이 있어요</SubTitle>
        
            <StandardButton title='선택 인원 추가하기' height='64px' width='384px' backgroundColor = 'white' color = 'black' onClick={handleButtonClick} />
        </Center>   

        </>
    )
}

export default Main;

function ProfileContainer ({name, top, left}){

    const [isClicked, setIsClicked] = useState(false)

    return(
    <div style={{position: 'absolute', top: top, left: left, display: 'flex', flexDirection: 'column', alignItems: 'center'}} onClick={()=>{
        if(isClicked){
            setIsClicked(false)
        }else{
            setIsClicked(true)
        }
    }}>
        <Name>{name}</Name>
        <Profile src={isClicked ? profileClicked : profileOnRadar}/>
    </div>
    )
}

const Profile = styled.img`
width: 48px;
height: 48px;
top: 0px;
left: 0px;
cursor: pointer;
`

const Name = styled.div`
font-size: 10px;
font-weight: 600;
color: black;
margin-bottom: 6px;
`