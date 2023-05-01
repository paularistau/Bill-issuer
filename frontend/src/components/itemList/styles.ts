import InfiniteScroll from "react-infinite-scroll-component";

export const ListView = styled.div`
  width: 100%;
`

export const InfiniteScrollList = styled.div`
  overflow-x: hidden;
`

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100vh - 74px);
  overflow-y: auto;
  overflow-x: hidden;
`;

export const ListDetailsWrapper = styled.div`
  display: table !important;
  flex-direction: column;
  background: ${(props) => props.theme.white};
  border-radius: 10px;
  padding-bottom: 40px;
  width: 100%;
  height: calc(100vh - 200px);

  & + div {
    margin-top: 20px;
  }
`;

import styled from 'styled-components';

export const Container = styled.div<{ hiddenNavigation?: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px;
  transition: all 0.6s;
  background-color: ${(props) => props.theme.white};
  border-radius: 4px;
  margin-bottom: 16px; 
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  font-style: normal;
  font-weight: 300;
  font-size: 10px;
  line-height: 15px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(217, 217, 217, 0.4);
  padding-bottom: 12px;
  color: ${(props) => props.theme.textGray};
  margin-bottom: 16px;
  box-shadow: 0px 2px 4px #00000050;
`;

export const Body = styled.section<{ columnsSizes: string }>`
  &.grid {
    display: grid;
    width: 100%;
  }

  &.grid-template-columns {
    grid-template-columns:${(props) => props.columnsSizes};
  }

  &.gap{
    column-gap: 32px;
  }
`;

export const Title = styled.text`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 20px 0;

  font-weight: 900;
  align-items: center;
  color: ${(props) => props.theme.primary};

`;

export const Text = styled(Title)`
  margin: 0;
  font-weight: 500;
  color: ${(props) => props.theme.darkGray};
  text-align: center;
  padding: 0 20px;
`;

export const LineViewStatus = styled.div`
  position: relative;
  top: -22px;
`;


export const HeaderText = styled.text`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  color: ${(props) => props.theme.textGray};
`;

export const LineViewText = styled.text`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.textGray};
  text-transform: capitalize;
  
  &.emailField{
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

`;
export const IconLineView = styled.div`
  padding: 0 2px;
  cursor: inherit;
  margin-left: 10px;
  width: 36px;

  &:hover {
    svg {
      path {
        fill: ${(props) => props.theme.primary};
      }
    }
  }
`;