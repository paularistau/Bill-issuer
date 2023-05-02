import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  width: 100%;
`;

export const InputArea = styled.div`
  display: flex;
  align-items: center;
  flex: 2;
  background-color: ${(props) => props.theme.background};
`;


export const IconSearchArea = styled.div`
  cursor: pointer;
  position: relative;
  left: 36px;
  margin-top: 6px;
`;

export const InputSearch = styled.input`
  border: 1px solid;
  border-color: ${(props) => props.theme.background};
  color: rgba(121, 121, 121, 0.68);
  background-color: ${(props) => props.theme.white};
  /* border-radius: 16.5px; */
  padding: 10px;
  padding-left: 48px;
  height: 40px;
  width: 100vh;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 24px; 
`