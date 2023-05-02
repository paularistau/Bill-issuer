import React, {
  DetailedHTMLProps,
  forwardRef,
  InputHTMLAttributes,
  useEffect,
  useState,
  useCallback,
  ChangeEvent,
} from 'react';
import { StyledInputWrapper } from './styles';
import { cep, currency, cpf } from './masks';
import { useDebouncedCallback } from '../../hooks/useDecounce';

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  errorMessage?: string;
  hasError?: boolean;
  mask?: 'cep' | 'currency' | 'cpf';
  prefix?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  timeout?: number;
}

const Input: React.FC<InputProps> = ({
  mask,
  prefix,
  timeout = 600,
  onChange,
  ...props
}) => {
  const { label, errorMessage, hasError = false } = props;
  const [inputValue, setInputValue] = useState('');

  const handleKeyUp = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      if (mask === 'cep') {
        cep(e);
      }
      if (mask === 'currency') {
        currency(e);
      }
      if (mask === 'cpf') {
        cpf(e);
      }
    },
    [mask]
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setInputValue(inputValue);
    }, 10000);

    return () => clearTimeout(timeoutId);
  }, [inputValue]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
    onChange(event.target.value);
  };

  const debouncedEvent = useDebouncedCallback(handleChange, timeout);

  return (
    <StyledInputWrapper>
      {label && <div className="styled-input-label">{label}</div>}

      {prefix && <span className="prefix-span">{prefix}</span>}
      <input
        className={hasError ? 'styled-input-has-error' : ''}
        onChange={debouncedEvent}
        onKeyUp={handleKeyUp}
        {...props}
        value={props.value}
      />
      {hasError && errorMessage && (
        <div className="styled-input-error-message">{errorMessage}</div>
      )}
    </StyledInputWrapper>
  );
};

export default Input;
