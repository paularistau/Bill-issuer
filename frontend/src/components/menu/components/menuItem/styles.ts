import styled, { keyframes } from 'styled-components';

interface IMenuProps {
  selected: boolean;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Name = styled.div`
  display: none;
  position: absolute;
  left: 90px;
  background: #00000070;
  padding: 10px;
  border-radius: 10px;
  align-items: center;
  color: ${(props) => props.theme.white};

  div {
    position: absolute;
    left: -16px;
    /* top: 10px; */
    border-right: 8px solid #00000060;
    border-left: 8px solid transparent;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
  }
`;

export const Container = styled.div<IMenuProps>`
  flex: 1;
  width: 100%;
  max-height: 86px;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  border-right: 3px solid
    ${(props) => (props.selected ? props.theme.white : props.theme.primary)};
  transition: all 0.6s;
  flex-direction: column;
  margin-bottom: 32px;
  svg  {
    transition: all 0.6s;
  }

  label {
    transition: all 0.6s;
    color: ${(props) =>
    props.selected ? props.theme.white : props.theme.middleGray};
  }
  
  &:hover ${Name} {
    display: flex;
    animation: ${fadeIn} 0.3s linear;
  }
`;

export const Text = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  color: ${(props) => props.theme.middleGray};
  margin-left: 20px;
  cursor: pointer;
  animation: ${fadeIn} 0.3s linear;
`;
