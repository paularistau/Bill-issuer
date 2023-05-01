import styled from 'styled-components';

export const Container = styled.div<{ width?: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 10px;
  width: ${(props) => (props.width ? props.width + 'px' : '100%')};
  background: ${(props) => props.theme.primary};
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0px 2px 4px #00000050;
  transition: all 0.6s;

  &:hover {
    box-shadow: 2px 4px 6px #00000050;
  }
`;

export const ContainerRedButton = styled(Container)`
  background: ${(props) => props.theme.error};
`;

export const ContainerWhiteButton = styled(Container)`
  background: ${(props) => props.theme.white};
  color: ${(props) => props.theme.primary};
  display: flex;
  justify-content: center;
  align-items: center;

  height: 31px;
  font-weight: 400;
  font-size: 10px;
  padding: 8px 12px;
  width: 200px;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0px 2px 4px #00000050;

  border: 1px solid ${(props) => props.theme.primary};
`;
