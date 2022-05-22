import React from "react";

import Text from "../Text";
import IconButton from "../IconButton";

import { StyledButton, StyledBadge } from "./StyledButton";

export type ButtonProps = {
  label: string;
  type: "base" | "primary";
  onClick: () => void;
  icon?: string;
  badgeText?: string;
  scale?: boolean;
  isDisabled?: boolean;
  testId?: string;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
};

const Button: React.FC<ButtonProps> = ({
  label,
  type,
  onClick,
  icon,
  badgeText,
  scale,
  isDisabled,
  id,
  className,
  style,
  testId,
}) => {
  const onClickAction: () => void = () => {
    !isDisabled && onClick();
  };

  return (
    <StyledButton
      id={id}
      className={className}
      style={style}
      type={type}
      onClick={onClickAction}
      scale={scale ? scale : undefined}
      isDisabled={isDisabled}
      data-testid={testId}
    >
      {icon && <IconButton className="button_icon" icon={icon} size={"15px"} />}
      <Text
        className="button_text"
        text={label}
        fontSize="17px"
        lineHeight="17px"
        fontWeight="500"
        noUserSelect
      />
      {badgeText && type === "base" && (
        <StyledBadge>
          <Text
            className="badge_text"
            text={badgeText}
            fontSize="11px"
            lineHeight="11px"
            noUserSelect
            isBold
          />
        </StyledBadge>
      )}
    </StyledButton>
  );
};

export default React.memo(Button);
