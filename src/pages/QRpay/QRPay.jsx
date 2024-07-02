import Layout from "../../shared/Layout";
import QRPayComponent from './QRPayComponent';

function QRPay(){
  return(
    <>
      <Layout content={<QRPayComponent />} />
    </>
  );
}

export default QRPay;