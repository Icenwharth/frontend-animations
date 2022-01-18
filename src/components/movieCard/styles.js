import styled from "styled-components";
import { motion } from "framer-motion";
import { SuspenseImage } from "../../Utils";
import { MediumTitle } from "../../styles/generic";

export const StyledMovieCard = styled(motion.div)`
  display: flex;
  max-height: 100px;
  padding: 5px 10px;
  border: 1px solid #000;
  margin-bottom: 20px;
  border-radius: 10px;
  background: #5f8384;
  cursor: pointer;
`;

export const InfoContainer = styled.div`
  margin-right: 10px;
  padding: 10px;
  overflow: hidden;
`;

export const Poster = styled(SuspenseImage)`
  width: 70px;
  height: 100px;
  background: grey;
  border-radius: 10px;
`;

export const ReleaseDate = styled(MediumTitle)`
  color: #afdbd9;
`;
