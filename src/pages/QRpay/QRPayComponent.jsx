import logo from '../../assets/payLogo.svg';
import styled from "styled-components";
import qr from '../../assets/payQrImg.svg';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logo = styled.img`
width : 89px;
height: 38px;
margin-top: 17px;
margin-left: 170px;
`

const Content = styled.div`
font-size: 20px;
font-weight: Regular;
font-family: 'Pretendard', 'sans-serif';
margin-left: 79px;
margin-top: 44px;
`

const Code = styled.img`
    width: 215px;
    height: 215px;
    margin-left: 108px;
    margin-top: 130px;
`

function QRPayComponent(){

    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
        navigate('/payComplete');
    }, 2000);

    return () => clearTimeout(timer);
    }, [navigate]);


    return(
    <>
    <Logo src={logo}></Logo>
    <Content>생성된 QR을 점원에게 보여주세요.</Content>
    <Code src={qr}></Code>
    </>
    );
}

export default QRPayComponent;