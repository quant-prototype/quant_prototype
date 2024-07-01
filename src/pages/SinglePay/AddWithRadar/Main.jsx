import BackwardBtn from '../../../assets/backWardBtn.png'
import styled from 'styled-components'

const TopLayout = styled.div`
width: 100%;
margin-top: 11.82px;
margin-left: 43px;
`

const Title = styled.div`
margin-top: 24.63px;
font-size: 25px;
font-weight: semibold;
color: black
`

function Main(){
    return(
        <>
        <TopLayout>
            <img src={BackwardBtn} />
            <Title>hello</Title>
        </TopLayout>
        
        </>
    )
}

export default Main;