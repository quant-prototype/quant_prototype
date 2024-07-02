import { motion } from "framer-motion";
import styled from "styled-components";

const Page = styled(motion.div)`
  width: 100%;
  // min-height: 100vh; 
  display: flex;
  flex-direction: column;
  flex: 1;
`

const PageWrapper = ({children}) => {
  return (
    <Page
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </Page>
  );
};

export default PageWrapper;