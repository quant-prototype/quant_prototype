import styled from "styled-components";
import statusBar from '../assets/statusBar.svg'
import indicator from '../assets/indicator.svg'

const ImageWrapper = styled.div`
width: 430px;
height: auto;
object-fit:contain;
z-index: 10;
background: #F3F4F7;
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
// status bar와 indicator가 포함된 레이아웃
// props로 컴포넌트를 넣어 화면 구성 (속성명: content)
function Layout ({content}){
    return (
        <>
        <ImageWrapper>
            <Img src={statusBar} />
        </ImageWrapper>
        {content}
        <IndicatorWrapper>
            <Img src={indicator} />
        </IndicatorWrapper>
        </>
    )
}

export default Layout

