import logo from '../../assets/payLogo.svg';
import styled from "styled-components";
import qr from '../../assets/payQrImg.svg';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageWrapper from '../../style/PageWrapper';
import HeaderComponent from '../PayConfirmProcedure/PayConfirmComponent/HeaderComponent';
import card from '../../assets/Card.svg';

const Logo = styled.img`
width : 89px;
height: 38px;
margin-top: 26px;
margin-left: 170px;
`

const Content = styled.div`
font-size: 25px;
font-weight: Bold;
font-family: 'Pretendard', 'sans-serif';
margin-left: 79px;
margin-top: 44px;
`

const Code = styled.img`
    width: 280px;
    height: 178px;
    margin-left: 75px;
    margin-top: 26px;
`

const Warning = styled.div`
font-size: 18px;
font-weight: Medium;
font-family: 'Pretendard', 'sans-serif';
margin-left: 92px;
margin-right: 91px;
margin-top: 300px;
cursor: pointer;
border-bottom: 1px solid black;
`

function CardPayComponent(){

    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
        navigate('/payComplete');
    }, 2000);

    return () => clearTimeout(timer);
    }, [navigate]);

    const handleBackButtonClick=()=>{navigate(-1);}


    return(
    <PageWrapper>
    <HeaderComponent back={handleBackButtonClick}/>
    <Logo src={logo}></Logo>
    <Content>카드 결제를 기다리고 있어요</Content>
    <Code src={card}></Code>
    <Warning>결제가 끝났는데 화면이 안넘어가요</Warning>
    </PageWrapper>
    );
}

export default CardPayComponent;