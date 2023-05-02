import styled from 'styled-components';
import Calendar from '../../assets/images/Calendar.png'

export const Wrapper = styled.div`
  z-index: 996;
  .react-datepicker {
    border: 1px solid ${(props) => props.theme.primary};
  }
  .react-datepicker__input-container {
    width: 300px;

    input {
      width: 250px;
      height: 47px;
      border-radius: 8px;
      border: 1px solid ${(props) => props.theme.primary};
      padding: 7px 7px 7px 12px;
      background: url(${Calendar}) no-repeat 220px center;
      background-size: 18px;
      cursor: pointer;
    }
};

.react-datepicker__header {
  background-color: white;
  border-bottom: none;
}
.react-datepicker__current-month {
  color: ${(props) => props.theme.lightGreen};
  font-weight: 400;
}
.react-datepicker__day-name {
  color: ${(props) => props.theme.middleGray};
}
.react-datepicker__day {
  color: ${(props) => props.theme.lightGreen};
}
.react-datepicker__day--in-range, .react-datepicker__day--in-selecting-range {
  background-color: ${(props) => props.theme.primary};
  color: black;
}
.react-datepicker__day--range-start, .react-datepicker__day--range-end, .react-datepicker__day--selecting-range-start, .react-datepicker__day--keyboard-selected {
  background-color: ${(props) => props.theme.lightGreen};
  color: white;
}
.react-datepicker__day--today + .react-datepicker__day--keyboard-selected {
  color: white;
}

.react-datepicker__day--disabled{
  color: ${(props) => props.theme.disabled};
}

.react-datepicker__triangle{
  transform: translate3d(234px, -1px, 0px) !important;
  &::before{
    border-top-color: ${(props) => props.theme.primary} !important;
  }
  &::after{
  }
}
`

export const LabelComponent = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  color: ${(props) => props.theme.darkGray};
  margin-bottom: 4px;
`;