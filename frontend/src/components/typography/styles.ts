import styled from "styled-components";

export const H1 = styled.h1`
  font-weight: 600;
  font-size: 48px;
  line-height: 58px;
  color: ${(props) => props.theme.primary};

  &:first-letter {
    text-transform: capitalize;
  }
`

export const H2 = styled.h2`
  font-weight: 500;
  font-size: 36px;
  line-height: 44px;
  color: ${(props) => props.theme.primary};
  
  &:first-letter {
    text-transform: capitalize;
  }
`

export const H3 = styled.h3`
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  color: ${(props) => props.theme.middleGray};
`


export const T1 = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  color: ${(props) => props.theme.textGray};
`

export const T2 = styled.div`font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.textGray};
`

export const T3 = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 10px;
  line-height: 15px;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.textGray};
`

export const T4 = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: ${(props) => props.theme.darkGray};
`

export const Link = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 10px;
  line-height: 15px;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.textGray};
  text-decoration: underline;
`


export const ButtonText = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 15px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${(props) => props.theme.white};
  padding: 4px;
`