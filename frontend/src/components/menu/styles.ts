import styled from 'styled-components';

import LogoImage from '../../assets/images/logo-white.png';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: ${(props) => props.theme.primary};
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  transition: all 0.6s;
  padding-bottom: 20px;
  position: fixed;
  z-index: 2;
  width: 80px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const Logo = styled.img.attrs({
  src: LogoImage,
})`
  display: flex;
  flex: 1;
  width: 54px;
  height: auto;
  margin: 32px 0;
  padding: 6px;
`;

export const Space = styled.div`
  flex: 1;
`;

export const IconArea = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProfileArea = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0 24px 0px;
`;

export const MenuClosed = styled.div`
  width: 100%;
  height: 42px;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: white;
  transition: all 0.6s;
  justify-content: center;

  svg {
    width: 25px;
    height: 25px;
    margin-right: 0;
  }

  svg path {
    fill: ${(props) => props.theme.middleGray};
  }
`;