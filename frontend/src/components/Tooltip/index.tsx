import React, { useRef, useState } from 'react';
import {
  TooltipWrapper,
  TooltipTarget,
  CenterContainer,
  TooltipBox,
} from './styles';

interface ITooltip {
  position?: string;
  title?: string;
  text: string;
  children: JSX.Element;
  background?: string;
}

export function Tooltip({
  position = 'bottom',
  title,
  text,
  children,
  background = '7C7C7C',
}: ITooltip) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const targetRef = useRef<HTMLButtonElement>(null);

  const handleClick = (e) => {
    e.preventDefault();
    if (targetRef.current) {
      targetRef.current?.blur();
    }
  };

  return (
    <TooltipWrapper>
      <TooltipTarget
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onClick={handleClick}
        ref={targetRef}
        showOnFocus={isFocused}
      >
        {children}
      </TooltipTarget>
      {isHovered && (
        <CenterContainer position={position}>
          <TooltipBox background={background} position={position}>
            {title} {text}
          </TooltipBox>
        </CenterContainer>
      )}
    </TooltipWrapper>
  );
}

export default Tooltip;
