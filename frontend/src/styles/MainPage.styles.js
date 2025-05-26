import styled from 'styled-components';
import { Box } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';

export const BackgroundContainer = styled.div`
  background-image: url(${props => props.bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -2;
`;

export const OverlayDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: -1;
`;

export const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;

  @media (max-width: 768px) {
    padding: 0 0.5rem;
  }
`;

export const StyledBox = styled(Box)`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 5rem;
  padding: 0 1rem;

  @media (max-width: 768px) {
    margin-top: 3rem;
    padding: 0;

    .MuiButtonGroup-root {
      flex-direction: column;
      width: 100%;

      .MuiButton-root {
        width: 100%;
        margin: 0.25rem 0;
        border-radius: 4px !important;
        border: 1px solid white !important;
      }
    }
  }
`;

export const StyledButtonGroup = styled(ButtonGroup)`
  & .MuiButton-root {
    color: white;
    border-color: white;
    padding: 6px 16px;
    &:hover {
      border-color: white;
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
  & .MuiButtonGroup-grouped:not(:last-of-type) {
    border-color: white;
  }
`;

export const MusicNote = styled.div`
  position: absolute;
  top: -20px;
  left: ${props => props.left}px;
  color: white;
  font-size: 1.2rem;
  animation: floatUp 0.8s ease-out forwards;

  @keyframes floatUp {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 1;
    }
    100% {
      transform: translateY(-20px) rotate(20deg);
      opacity: 0;
    }
  }
`;