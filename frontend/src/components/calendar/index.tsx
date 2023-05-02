import React, { memo } from 'react';
import DatePicker, { ReactDatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { LabelComponent, Wrapper } from './styles';

interface ICalendarProps extends Omit<ReactDatePickerProps, 'selected'> {
  handleChange: (date) => void;
  startDate?: string | Date | [Date, Date] | null;
  endDate?: string | Date;
  isRange?: boolean;
  isCleareable?: boolean;
  selected?: Date;
  minDate?: Date | null;
  maxDate?: Date | null;
  label?: string;
  isdisabled?: boolean;
}

export const Calendar: React.FC<ICalendarProps> = memo(
  ({
    handleChange,
    startDate,
    endDate,
    isRange = false,
    isCleareable = true,
    selected,
    minDate,
    maxDate,
    label,
    isdisabled,
    ...restProps
  }) => {
    const parsedStartDate =
      typeof startDate === 'string' ? new Date(startDate) : startDate;
    const parsedEndDate =
      typeof endDate === 'string' ? new Date(endDate) : endDate;

    const datePickerCleareable = !!parsedStartDate || !!parsedEndDate;

    return (
      <Wrapper>
        {label && <LabelComponent>{label}</LabelComponent>}
        {isRange ? (
          <DatePicker
            wrapperClassName="datePicker"
            selectsRange={isRange}
            startDate={parsedStartDate}
            endDate={parsedEndDate}
            onChange={handleChange}
            isClearable={isCleareable && datePickerCleareable}
            placeholderText={''}
            selected={selected}
            minDate={minDate}
            maxDate={maxDate}
            disabled={isdisabled}
            {...restProps}
          />
        ) : (
          <DatePicker
            wrapperClassName="datePicker"
            selected={parsedStartDate}
            onChange={handleChange}
            isClearable={isCleareable && datePickerCleareable}
            placeholderText={''}
            minDate={minDate}
            maxDate={maxDate}
            disabled={isdisabled}
            {...restProps}
          />
        )}
      </Wrapper>
    );
  }
);
