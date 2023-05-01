import Modal from 'react-modal';
import styled from 'styled-components';

export const ScrollComponent = styled.div<{ width: number }>`
  overflow: hidden;
  width: ${({ width }) => width}px;
  height: 100%;
  transition: all 150ms ease;
  position: relative;
  top: 0;
`;

export const ModalCustom = styled(Modal)`
  position: absolute;
  top: 0;
  z-index: 999;
`;

export const Container = styled.div`
  display: flex;
  position: fixed;
  background: #00000040;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  z-index: 3;
`;

export const ModalComponent = styled.div<{ height: number; width: number }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background: ${(props) => props.theme.white};
  border-radius: 10px;
  padding: 30px 24px 0 45px;
  min-width: 50%;
  position: fixed;
  align-items: center;
`;

export const ModalBody = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.white};
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: auto;
`;

export const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 27px;
`;

export const ModalTitle = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 48px;
  text-align: center;
  color: ${(props) => props.theme.primary};
`;

export const ModalClose = styled.div`
  svg {
    width: 38px;
    height: 38px;
    cursor: pointer;

    path {
      stroke: ${(props) => props.theme.primary};
    }
  }
`;
