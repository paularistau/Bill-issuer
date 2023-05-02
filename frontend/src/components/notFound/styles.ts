import styled from "styled-components"

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  padding: 56px;
`;

export const NotFoundIcon = styled.div`
  margin-bottom: 22px;
`;

export const NotFoundTitle = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: ${(props) => props.theme.textGray};
`;

export const NotFoundSubTitle = styled.div`
  font-style: normal;
  font-weight: 200;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #000000;
  width: 435px;
  margin-top: 10px;
`;