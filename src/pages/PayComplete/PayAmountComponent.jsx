import { useState } from "react"
import styled from "styled-components"

const PayCompleteText = styled.p`
  font-size: 25px;
  font-weight: 500;
  font-family: "Pretendard", sans-serif;
  color: black;
  line-height: 1.4;
  text-align: center;
  margin-top: 150px;
`

export default function PayAmountComponent({payAmount, memberCount}) {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(amount).replace('₩', '').trim();
  };

  return (
    <PayCompleteText>총 {formatCurrency(payAmount)}원<br />1인당 {formatCurrency(payAmount / memberCount)}원이<br/>결제되었습니다. </PayCompleteText>
  ) 
} 