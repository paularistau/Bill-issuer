import styled from 'styled-components';
import { IBodyProps } from './types';

export const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: ${(props) => props.theme.background};
  height: 100vh;
`;

export const Body = styled.div`
  display: flex;
  width: 100%;
  transition: all 0.6s;
  padding: 40px 0 0 90px;
  flex-direction: column;
`;
