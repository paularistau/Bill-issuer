import styled, { keyframes } from 'styled-components';


interface IDotProps {
  delay: string;
}

const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 15px }
  100% { margin-bottom: 0 }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 16px; */
  margin-bottom: 24px;
`;

export const Text = styled.span`
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: center;
  color: ${(props) => props.theme.primary};
  margin-right: 5px;
`;

export const DotWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;
export const Dot = styled.div<IDotProps>`
  background-color: ${(props) => props.theme.primary};
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${(props) => props.delay};
`;
