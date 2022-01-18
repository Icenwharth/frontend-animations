import styled from "styled-components";
import { motion } from "framer-motion";

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const CardsContainer = styled(motion.ul)`
  margin-bottom: 10px;
  padding: 0px 10px;
  height: 450px;
  scrollbar-width: 0px;
  border-radius: 10px;
  -ms-overflow-style: none;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ListElement = styled(motion.li)`
  list-style: none;
`;
