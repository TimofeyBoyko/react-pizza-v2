import React from "react";

import { ReactSVG } from "react-svg";

import StyledIconButton from "./StyledIconButton";

export type IconButtonProps = {
  icon: string;
  size: string;
  color?: string;
  onClick?: () => void;
  isDisabled?: boolean;
  testId?: string;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
};

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  size,
  color,
  onClick,
  isDisabled,
  testId,
  id,
  className,
  style,
}) => {
  const onClickAction = () => {
    !isDisabled && onClick && onClick();
  };

  return (
    <StyledIconButton
      id={id}
      className={className}
      style={style}
      size={size}
      color={color}
      isDisabled={isDisabled}
    >
      <ReactSVG src={icon} onClick={onClickAction} data-testid={testId} />
    </StyledIconButton>
  );
};

export default React.memo(IconButton);
