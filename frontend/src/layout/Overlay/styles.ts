import styled from "styled-components";

interface IOverlayProps {
  visible: boolean;
}

export const OverlayView = styled.div<IOverlayProps>`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  width: 100%;
  height: 100%;
  position: fixed;
  background-color:rgba(69, 69, 69, 0.5);
  z-index: 2;
  inset: 0px;
`;