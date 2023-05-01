import styled from 'styled-components';

export const StyledInputWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  grid-gap: 8px;

  .styled-input-label {
    font-size: 14px;
    font-weight: 700;
    color: ${(props) => props.theme.textGray};

    margin-bottom: 8px;
  }

  .styled-input-error-message {
    font-size: 12px;
    color: ${(props) => props.theme.error};
  }

  > input {
    width: 100%;
    height: 44px;
    background-color: ${(props) => props.theme.white};
    border: 1px solid ${(props) => props.theme.primary};
    border-radius: 8px;

    font-size: 12px;
    padding: 0 16px;

    color: ${(props) => props.theme.textGray};

    &.styled-input-has-error {
      border-color:${(props) => props.theme.error};
    }

    &:disabled {
      opacity: 0.5;
    }

    &::placeholder {
      font-size: 12px;
      color:  ${(props) => props.theme.textGray};
    }
  }
`;
